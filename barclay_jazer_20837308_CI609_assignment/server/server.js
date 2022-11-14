// Import enviroment config
require('dotenv').config();

// Import express app
const express = require('express');

// Init morgan logging
const logger = require('morgan');
const fs = require('fs');

// Initialise express app
const app = express();

// Set port to process variable or, if unset, to 4000
const PORT = process.env.PORT || 4000;

// Use morgan to log access to file access.log
app.use(logger('common', {
    stream: fs.createWriteStream(process.env.LOGFILE || './access.log', {flags: 'a'})
}));

// Parsing the incoming data from either form or json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add signup route
const signupRouter = require('./routes/signup/signupRouter');
app.use('/signup', signupRouter);

// Add login route
const loginRouter = require('./routes/login/loginRouter');
app.use('/login', loginRouter);

// Add user route
const userRouter = require('./routes/users/userRouter');
app.use('/users', userRouter);

// Add sightings
const sightingsRouter = require('./routes/sightings/sightingRouter');
app.use('/sightings', sightingsRouter);

// Add default route
app.get('/', (req, res) => {
    res.status(200).end();
});

// Start app
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));