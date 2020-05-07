const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
=======
 * GET route for getting user experiences based on passing ID as a param
 * TODO: Update query to include photo
 */
router.get("/:id", rejectUnauthenticated, (req, res) => {
  const userID = req.params.id;
  const queryText = `SELECT "user_photos_experiences".user_id, "experiences".description
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
 * POST route template to add list item (link with user id) STILL NEEDS WORK
 */
router.post("/:id", (req, res) => {
  let newItem = req.body;

  console.log(`Adding item`, newItem);
  //this POST route is not currently passing id in to pg as a value, so the GET route that works based on user ID will not GET new post data added in this way
  let queryText = `INSERT INTO "experiences" ("description") VALUES ($1) RETURNING "id";`;
  pool
    .query(queryText, [newItem.description])
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

//PUT route to update single list item
router.put("/:id", (req, res) => {});

// route to delete list item (?)
router.delete("/:id", (req, res) => {});

module.exports = router;
