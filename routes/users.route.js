
const router = require('express')
  .Router();


const jwt = require('express-jwt')

router.use(jwt({ secret: '123456', algorithms: ['HS256'] }))


router.get('/', (req, res) => {
  res.send('Hello');
});



module.exports = router
