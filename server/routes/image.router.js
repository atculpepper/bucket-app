const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
// router.get("/", (req, res) => {});

/**
 * POST route template
 */
// router.post("/:userID", rejectUnauthenticated, (req, res) => {
//   console.log(req.body);
//   res.sendStatus(200);
// });

router.post("/:userID", rejectUnauthenticated, (req, res) => {
  let imgURL = req.body.imgURL;
  let userID = req.body.userID;

  let queryText = `INSERT INTO "photos" ("experience_photo") VALUES ($1) RETURNING id;`;

  pool
    .query(queryText, [imgURL])
    .then((responseDB) => {
      const photoID = responseDB.rows[0].id;

      pool
        .query(
          `INSERT INTO "user_photos_experiences" ("user_id", "photo_id") VALUES ($1, $2);`,
          [userID, photoID]
        )
        .then((responseDB) => {
          const dbRows = responseDB.rows;
          console.table(dbRows);
          res.send(dbRows);
        })
        .catch((err) => {
          console.log("err inserting to photos", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log("err inserting to user_photos_experiences", err);
      res.sendStatus(500);
    });
});

module.exports = router;
