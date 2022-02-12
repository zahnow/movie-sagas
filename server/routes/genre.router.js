const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryString = `
    SELECT * FROM "genres"
    ORDER BY "id" ASC;`;
  pool.query(queryString)
    .then(response => {
      res.send(response.rows);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500)
    });
});

router.get('/:genreId', (req, res) => {
  const queryString = `
    SELECT * FROM "genres" 
    WHERE "id" = $1;`;
  pool.query(queryString, [req.params.genreId])
    .then(response => {
      res.send(response.rows);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500)
    });
});

module.exports = router;