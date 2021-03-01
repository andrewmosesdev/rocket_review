require('dotenv').config();
require('./utils/verifyConfiguration')();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./controllers')
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const morgan = require('morgan');
const compression = require('compression');
const app = express();


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
// app.use for adminbro location is important; must be before 20-28
app.use('/admin', require('./utils/admin'));

app.use(bodyParser.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rocket_review', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

app.listen(PORT, function () {
    console.log(`Server now on port ${PORT}!`);
});