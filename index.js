const express = require('express');
const typeorm = require('typeorm')
const app = express();
const cors = require('cors')
const PORT = 9000;

const userctrl = require('./controller/user.controller')

app.use(express.json());
app.use(cors())


app.use('/', require('./routes/index.route'))
app.use('/auth', require('./routes/auth.route'))
app.use('/users', require('./routes/users.route'))



app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})
