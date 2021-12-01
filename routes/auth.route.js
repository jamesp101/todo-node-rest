const router = require('express')
  .Router();
const auth =
  require('../controller/auth.controller');

require('dotenv').config()


router.post('/login', auth.login)
router.post('/register', auth.register)
router.post('/refresh', auth.refresh)



module.exports = router
