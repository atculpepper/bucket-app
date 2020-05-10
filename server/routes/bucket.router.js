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
router.get("/:id", rejectUnauthenticated, (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  const queryText = `SELECT "user_photos_experiences".user_id, "experiences".description, "experiences".id
  FROM "user_photos_experiences" JOIN "experiences" ON "user_photos_experiences".experience_id = "experiences".id
  WHERE "user_id" = $1;`;
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

//PUT route to update single list item
router.put("/:id", (req, res) => {});

// route to delete list item
//I need to pass the experience ID as a param ()...does that mean I need to GET experiences as well?) and then chain my queries so that the list item is deleted from both "experiences" and "user_photos_experiences"
router.delete("/:id", (req, res) => {
  let newItem = req.body;
  let userID = req.params.id;

  console.log(`Deleting item`, newItem.bucketItem);
  let queryText = `DELETE FROM "experiences" ("description") VALUES ($1) RETURNING id;`;

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

module.exports = router;
