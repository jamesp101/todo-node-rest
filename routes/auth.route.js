

const router = require('express')
  .Router();

const userController =
  require('../controller/user.controller');

const jwt = require('jsonwebtoken')



const SECRET = "123456";


// Refresh user
router.get('/', (req, res) => {
  res.send('Use POST method')
})


router.post('/login', async (req, res) => {
  // Login
  try {
    let user = await userController.login(
      email = req.body.email,
      username = req.body.username,
      password = req.body.password
    )
    user.token = generateAccessToken(user)
    res.send(user)

  } catch (e) {
    res.status(404).send({ message: e.message })
    return;
  }

})



router.post('/register', async (req, res) => {

  try {
    let user = await userController.register(req.body)

  } catch (e) {
    console.log(e)
    const error = new Error()
    error.status = 404
    error.message = e.message
    res.send(error)
    return;
  }

  res.send('User registered!')


})



function generateAccessToken(user) {
  return jwt.sign(
    user,
    SECRET,
    {
      expiresIn: 60 * 60 * 60,
      algorithm: 'HS256'
    }
  )

}






module.exports = router
