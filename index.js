var express  = require('express');
var app      = express();
var router = express.Router();

router.get('/sample', function(req, res){
        res.send('It\'s alive!');
    });

app.listen(3000);

app.use('/api', router);