const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
=======
 * GET route for getting user experiences based on passing ID as a param
 */
//need to add a selection from photos table
router.get("/:id", rejectUnauthenticated, (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  const queryText = `SELECT "user_photos_experiences".user_id, "experiences".description, "experiences".id, "user_photos_experiences".completed, "user_photos_experiences".photo_id
  FROM "user_photos_experiences" JOIN "experiences" ON "user_photos_experiences".experience_id = "experiences".id
  WHERE "user_id" = $1 ORDER BY "id" DESC;`;
  pool
    .query(queryText, [userID])
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      console.log("error:", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template to add list item (link with user id)
 */
router.post("/:id", (req, res) => {
  let newItem = req.body;
  let userID = req.params.id;

  console.log(`Adding item`, newItem.bucketItem);
  let queryText = `INSERT INTO "experiences" ("description") VALUES ($1) RETURNING id;`;

  pool
    .query(queryText, [newItem.bucketItem])
    .then((responseDB) => {
      const experienceID = responseDB.rows[0].id;

      pool
        .query(
          `INSERT INTO "user_photos_experiences" ("user_id", "experience_id") VALUES ($1, $2);`,
          [userID, experienceID]
        )
        .then((responseDB) => {
          const dbRows = responseDB.rows;
          console.table(dbRows);
          res.send(dbRows);
        })
        .catch((err) => {
          console.log("err inserting to experiences", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log("err inserting to user_photos_experiences", err);
      res.sendStatus(500);
    });
});

//PUT route to update description of a single list item
router.put("/edit/:experienceID", (req, res) => {
  const queryText = `UPDATE "experiences" SET "description" = $1 WHERE "id" = $2;`;
  const experienceID = req.params.experienceID;
  const changedExperience = req.body.description;

  pool
    .query(queryText, [changedExperience, experienceID])
    .then((responseDB) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//PUT route to update Complete of a list item
router.put("/edit/updateComplete/:experienceID", (req, res) => {
  const queryText = `UPDATE "user_photos_experiences" 
  SET "completed" = $1
  WHERE "experience_id" = $2;`;
  const completeValue = req.body.completeValue;
  const experienceID = req.body.experienceID;

  pool
    .query(queryText, [completeValue, experienceID])
    .then((responseDB) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//PUT route to update description of a list item
//THIS NEEDS TO BE EDITED from 107 down
router.put("/edit/updateDescription/:experienceID", (req, res) => {
  const queryText = `UPDATE "experiences" 
  SET "description" = $1
  WHERE "id" = $2;`;
  const newDescription = req.body.newDescription;
  const experienceID = req.body.experienceID;

  pool
    .query(queryText, [newDescription, experienceID])
    .then((responseDB) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// route to delete list item
router.delete("/:experienceID", (req, res) => {
  let experienceID = req.params.experienceID;
  console.log(req.params.experienceID);

  console.log(`Deleting item`, experienceID);
  let queryText = `DELETE FROM "user_photos_experiences" WHERE "experience_id" = $1;`;
  pool
    .query(queryText, [experienceID])
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;
