import express from 'express';
import connection from '../conf';

const router = express.Router();

/* GET all admins. */
router.get('/', (request, response) => {
  connection.query('SELECT id, lastname, firstname, email, super_admin, company_id FROM admin', (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});


/* GET one admin by id. */
router.get('/:id', (request, response) => {
  const idAdmin = request.params.id;
  connection.query('SELECT id, lastname, firstname, email, super_admin, company_id FROM admin WHERE id = ?', [idAdmin], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

/* POST one admin. */
router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO admin SET ?', formData, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
});

export default router;
