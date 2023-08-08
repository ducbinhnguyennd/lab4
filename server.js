var express = require('express');
var app = express();

var expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');



app.get('/', function(req, res){
   // khong chi ro layout - render vao main.hbs
   res.render('home');
});

let tong = 0;

// route
app.get('/tinhtoan', function(req, res, next){
   tong += 10;
   next();
   //res.send('Tong 2 so la: ' + tong);
});

app.get('/tinhtoan', function(req, res, next){
   tong += 10;
   next();
   //res.send('Tong 2 so la: ' + tong);
});

app.get('/tinhtoan', function(req, res){
   tong += 10;

   // chi ro layout template la trangtinh.hbs
   res.render('empty', {
      layout: 'trangtinh',
      ketqua: tong
   });
   //res.send('Tong 2 so la: ' + tong);
});

app.listen(8000);