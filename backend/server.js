const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
// error handler
const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');

connectDB();

// run server here
const port = process.env.PORT || 5000;

// initialize express
const app = express();

// allow to console.log req.body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// before transporting to signUpRoutes:
// app.get('/', (req, res) => {
//     res
//       .status(200)
//       .json({ message: 'WE GOT IT BABY FROM I AM FROM SIGNUPROUTES' });
//   });
// after transporting to signUpRoutes:
app.use('/signup', require('./routes/signUpRoutes'));

// overwrite default error handler
// from html to stack trace
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on ${port}`));
