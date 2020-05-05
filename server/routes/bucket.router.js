const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
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
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("error:", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
