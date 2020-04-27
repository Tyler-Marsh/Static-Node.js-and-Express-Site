const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* GET request for home page */

router.get('/', function(req, res, next) {
  res.render('index', { projects });
  console.log("App being served at port 3000");
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

// then loop through projects in index.pug


/* GET request for project page. */
router.get('/projects/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );
  
  if (project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;