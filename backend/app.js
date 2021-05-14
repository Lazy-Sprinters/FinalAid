const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path=require('path');
const utilityrouter=require('./src/routers/utilityRouter');

const app = express();

app.use(morgan('dev'));

app.use(express.json({limit: '10mb', extended: true}));
app.use(express.urlencoded({extended:true}));

app.use(cors()); //Cross Origin Resource Sharing

app.use('/utility',utilityrouter);

require('dotenv').config({path:path.resolve(__dirname, './.env') });

app.use((req, res, next) => {
      const err = new Error('Endpoint missing');
      err.status = 404
      next(err)
})

app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
          success: false,
          code: 400,
          message: error.message,
          response: null, 
      })
})

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log("Fired Up! @ "+ port);
});