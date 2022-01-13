
const router = require('express')
  .Router();
const jwt = require('express-jwt');
const todoController = require('../controller/todo.controller');
require('dotenv').config();


router.use(jwt(
  {
    secret: process.env.SECRET_JWT,
    algorithms: ['HS256']
  }

));



router.get('/', (req, res) => res.send('You are requesting a todo'));

router.get('/:id', todoController.findOne);





module.exports = router;
