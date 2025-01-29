var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var useragent = require('express-useragent');
var cors = require('cors')

var indexRouter = require('./src/routes/index');
const connectDB = require('./src/Model/db');
const { createClient } = require('@supabase/supabase-js');

var app = express();


app.use(useragent.express());

// Middleware para detección de IP y dispositivo
app.use((req, res, next) => {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.useragent;

  console.log(`Nueva conexión desde IP: ${clientIp}`);
  console.log(`Dispositivo: ${userAgent.isMobile ? 'Móvil' : userAgent.isDesktop ? 'Escritorio' : 'Otro'}`);
  console.log(`Navegador: ${userAgent.browser}`);
  console.log(`Sistema Operativo: ${userAgent.os}`);

  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', (req,res)=>{
  console.log('Log');
  res.send('Hola')
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Conectar a MongoDB
connectDB();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
