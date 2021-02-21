require('dotenv').config();
// Configuration check.
// Disable this at your own risk
require('./utils/verifyConfiguration')();
// Requiring necessary npm packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
// Bringing in Morgan, a nice logger for our server
const morgan = require('morgan');
// Compression
const compression = require('compression');
// Creating express app
const app = express();

// Set up our middleware!
// Dev Logging. Only works in test or development
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use('/admin', require('./utils/admin'));

// enable compression middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/rocket-review', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        
        // Requiring our routes
        const routes = require('./controllers');

        app.use(routes);

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, './client/build/index.html'));
        });

        app.listen(PORT, function () {
            console.log(`Server now on port ${PORT}!`);
        });
    });