var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var suits = db.get('suits');
	suits.findOne({num: 1}).on('success', function(doc) {
		res.render('index', { title: doc['name'] });
	});
});

module.exports = router;
