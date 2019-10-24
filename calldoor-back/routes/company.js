import express from 'express';
import connection from '../conf';

const router = express.Router();


/* GET all companies or get company by name or city. */
router.get('/', (request, response) => {
  let sqlQuery = '';
  let search = {};
  // est ce que j'ai des paramètres de requete? (query parameter)
  if (request.query.search === undefined) {
    sqlQuery = 'SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating, COUNT(*) AS totalcomments FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id WHERE c.validation=1 GROUP BY c.id DESC LIMIT 3';
  } else {
    sqlQuery = "SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating, COUNT(*) AS totalcomments FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id WHERE c.validation=1 && c.city LIKE '%' ? '%' OR c.name LIKE '%' ? '%' GROUP BY c.id DESC LIMIT 3";
    search = request.query.search;
  }

  connection.query(sqlQuery, [search, search], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});


/* GET one company by id. */
router.get('/:id', (request, response) => {
  const idCompany = request.params.id;
  connection.query('SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, (AVG(ct.review1)) AS rating1, (AVG(ct.review3)) AS rating2, (AVG(ct.review4)) AS rating3, (AVG(ct.review5)) AS rating4, (AVG(ct.review6)) AS rating5, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating, COUNT(*) AS totalcomments FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id WHERE c.id = ? GROUP BY c.id', [idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

/* GET one company by id where comment validation = 1 */
router.get('/review/:id', (request, response) => {
  const idCompany = request.params.id;
  connection.query('SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, (AVG(ct.review1)) AS rating1, (AVG(ct.review3)) AS rating2, (AVG(ct.review4)) AS rating3, (AVG(ct.review5)) AS rating4, (AVG(ct.review6)) AS rating5, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating, COUNT(*) AS totalcomments, CONCAT(a.lastname, " ", a.firstname) as manager, a.email FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id LEFT JOIN admin AS a ON a.company_id = c.id WHERE c.id = ? AND ct.validation = 1 GROUP BY c.id, a.id', [idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else if (results.length !== 0) {
      response.json(results);
    } else {
      connection.query('SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, CONCAT(a.lastname, " ", a.firstname) as manager, a.email FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id LEFT JOIN admin AS a ON a.company_id = c.id WHERE c.id = ? GROUP BY c.id, a.id', [idCompany], (err, resu) => {
        if (err) {
          response.sendStatus(500);
        } else {
          response.json(resu);
        }
      });
    }
  });
});


/* GET all home cards from company. */
router.get('/homecards', (request, response) => {
  connection.query('SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id GROUP BY c.id ', (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

/* GET home cards from company for top 10. */
router.get('/homecards/top10', (request, response) => {
  connection.query('SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating, COUNT(*) AS totalcomments FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id WHERE ct.validation=1 AND c.validation=1 GROUP BY c.id ORDER BY rating DESC LIMIT 10 ', (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

/* GET one home card from company by id. */
router.get('/homecards/:id', (request, response) => {
  const idCompany = request.params.id;
  connection.query('SELECT c.id, c.name, c.logo, c.city, c.size, c.website, c.description, ((AVG(ct.review1) + AVG(ct.review3) + AVG(ct.review4) + AVG(ct.review5) + AVG(ct.review6))/5) AS rating, COUNT(*) AS totalcomments FROM company AS c LEFT JOIN reviews AS ct ON c.id=ct.company_id WHERE c.id = ?', [idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});


/* POST one company. */
router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO company SET ?', formData, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
});

/* DELETE one company by id. */
router.delete('/:id', (request, response) => {
  const idCompany = request.params.id;
  connection.query('DELETE FROM company WHERE id = ?', [idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

/* GET all companies who need approvation by admin */
router.get('/admin/companies', (request, response) => {
  connection.query('SELECT id, name, logo, city FROM company WHERE validation = 0', (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});


/* UPDATE informations of one company */
router.put('/:id', (request, response) => {
  const idCompany = request.params.id;
  const requestBody = request.body;
  connection.query('UPDATE company SET ? WHERE id = ?', [requestBody, idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

/* UPDATE validation to 1 */
router.put('/validation/:id', (request, response) => {
  const idCompany = request.params.id;
  connection.query('UPDATE company SET validation = 1 WHERE id = ?', [idCompany], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

/* POST company by Admin. */
router.post('/admin/manage', (request, response) => {
  const newCompany = request.body;
  connection.query('INSERT INTO admin SET ?', newCompany, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
});

router.get('/allow/toreview', (request, response) => {
  connection.query(`SELECT com.name, com.logo, com.city , COUNT(r.company_id) as nbComments
                    FROM company AS com
                    JOIN reviews AS r
                    ON com.id = r.company_id
                    WHERE r.validation = 0
                    GROUP BY r.id
                    ORDER bY r.company_id ASC`, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

export default router;
