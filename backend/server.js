const express = require('express');
const dotenv = require('dotenv').config();
// run server here
const port = process.env.PORT || 5000;

// initialize express
const app = express();

// before transporting to signUpRoutes:
// app.get('/', (req, res) => {
//     res
//       .status(200)
//       .json({ message: 'WE GOT IT BABY FROM I AM FROM SIGNUPROUTES' });
//   });
// after transporting to signUpRoutes:
app.use('/signup', require('./routes/signUpRoutes'));

app.listen(port, () => console.log(`Server started on ${port}`));
