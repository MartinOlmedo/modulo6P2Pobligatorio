var express = require('express');
var router = express.Router();


var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QUIZ' });
});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
router.get('/author', function(req, res, next) {
	var fullUrl = req.protocol + '://' + req.get('host') ; 
	console.log("URL:   " + fullUrl);
  	res.render('author', { title: 'QUIZ', rutaVideo: ( fullUrl+'/demo.mp4'),
  						rutaFoto: (fullUrl + '/fotoPerfil.png') });
});	

module.exports = router;
