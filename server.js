const express = require('express');
const logger = require('morgan');
// const multer = require('multer')
// const upload = multer()
const passport = require('passport');
const cors = require("cors")
const app = express(); 

app.use(logger('dev'))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  

app.use(express.urlencoded())
// app.use(upload.any()) 
app.use(express.json())
app.use(passport.initialize());

require('./app/auth/passport')

app.use(require('./app/auth/routes'))
app.use(require('./app/region/routes')) 
app.use(require('./app/participants/routes'))
app.use(require('./app/resume/routes')) 
app.use(require('./app/likes/routes')) 
app.use(require('./app/followers/routes')) 
app.use(require('./app/comments/routes')) 

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
}) 
