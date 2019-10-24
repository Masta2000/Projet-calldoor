import express from 'express';
import connection from '../conf';

const router = express.Router();

// POST review from quizz
router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO reviews SET ?', formData, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201, results);
    }
  });
});

//* GET all comments by company ID */
router.get('/company/:id', (request, response) => {
  const idCompany = request.params.id;
  connection.query('SELECT id, date, review7, review8, (review1 + review3 + review4 + review5 + review6) /5 AS rating, company_id FROM reviews WHERE company_id = ? AND validation = 1', [idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

// GET reviews where validation = none
router.get('/sorted/validation', (request, response) => {
  connection.query(`SELECT com.name, com.logo, com.id, com.city, c.company_id as companyId, COUNT(c.id) as nbComments
                    FROM reviews AS c 
                    JOIN company AS com ON c.company_id = com.id 
                    WHERE c.validation = 0
                    GROUP BY com.id
                    ORDER bY c.company_id ASC`, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

// get review by company id
router.get('/validation/content/:id', (request, response) => {
  const idRequest = request.params.id;
  connection.query(`SELECT c.id, c.review7, c.review8, c.review9 FROM reviews AS c 
                    LEFT JOIN company AS com ON c.company_id = com.id 
                    WHERE c.validation = 0 AND com.id = ?
                    `, [idRequest], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});


// PUT updtate validation to 1
router.put('/validation/content/:id', (request, response) => {
  const idRequest = request.params.id;
  connection.query(`UPDATE reviews
                    SET validation = 1
                    WHERE id = ?
                    `, [idRequest], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

// DELETE delete 1 comment by id
router.delete('/validation/content/:id', (request, response) => {
  const idRequest = request.params.id;
  connection.query(`DELETE FROM reviews
                    WHERE id = ?
                    `, [idRequest], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});


export default router;
