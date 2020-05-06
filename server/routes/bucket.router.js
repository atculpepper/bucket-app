const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route for getting user experiences based on passing ID as a param
 * TODO: Update query to include photo
 */
router.get("/:id", (req, res) => {
  const userID = req.params.id;
  const queryText = `SELECT "user_experiences".user_id, "experiences".description
    FROM "user_experiences" JOIN "experiences" ON "user_experiences".experience_id = "experiences".id
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
  console.log(`Adding item`, newItem);

  let queryText = `INSERT INTO "experiences" ("description") VALUES ($1);`;
  pool
    .query(queryText, [newItem.description])
    .then((result) => {
      res.sendStatus(200);
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
