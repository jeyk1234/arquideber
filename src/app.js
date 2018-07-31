const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://heroku_n964lbkb:f22uo3b4qr71mmhp6tufra94p2@ds159641.mlab.com:59641/heroku_n964lbkb')
    .then(db => console.log('BD esta conectada'))
    .catch(err => console.error(err));
//settings

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/futbolito', require('./routes/jugador'))



//server is listening
app.listen(app.get('port'), () => {
 console.log('server on port 3000');
});