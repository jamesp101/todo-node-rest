const express = require('express');
const app = express();
const cors = require('cors')
const jwt = require('express-jwt')

const PORT = 9000;

require('dotenv').config()

app.use(express.json());
app.use(cors())

// app.use(jwt(
//   {
//     secret: process.env.SECRET_JWT,
//     algorithms: ['HS256']
//   }

// ))


// app.use((err, req, res, next) => {
//   if (err.code === 'permission_denied') {
//     res.status(403).send({ message: "Forbidden" })
//   }

// });

app.use('/', require('./routes/index.route'))
app.use('/auth', require('./routes/auth.route'))
app.use('/users', require('./routes/users.route'))



app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})
