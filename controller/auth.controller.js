const connection = require('../database')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')





require('dotenv').config()

module.exports = {
  login: async (req, res) => {
    try {
      const con = await connection.getConnection()
      const repo = await con.getRepository('Users')
      let login = req.body;

      let query = (login.email == undefined) ?
        { username: login.username }
        : { email: login.email }

      let user = await repo.findOne(query)


      if (compareHash(user.password))
        throw Error('Password Error')

      if (user == undefined || user == null)
        throw Error('User not found')


      delete user['password']



      user.token = {
        accessToken: generateToken(user),
        refreshToken: refreshToken()
      }

      res.send(user)
      console.log('HEllo')

    } catch (e) {

      res.statusCode = 404
      res.json({
        message: e.message
      })

    }
  },

  register: async (req, res) => {
    const con = await connection.getConnection()
    const repo = await con.getRepository('Users')

    let user = req.body;
    user.password = generateHash(user.password)

    try {
      let x = await repo.save(user);
      delete x['password']
      res.send({
        message: 'User Registered!',
        user: {
          x
        }

      });

    } catch (e) {
      res.statusCoe = 404
      res.send({
        message: e.message
      })
    }

  },


  refresh: async (req, res) => {
    try {
      let t = connection.getRepository('RefreshToken')
      let tokens = t.findOne({ token: req.user.token.refreshToken })

      if (tokens == undefined || tokens == [] || tokens == {})
        throw Error('Token not found')

      res.json({
        accessToken: generateToken(req.user)
      })


    } catch (e) {
      res.statusCode = 404
      res.json({
        message: e.message
      })
    }
  },


}

function generateHash(password = '') {
  let salt = bcrypt.genSaltSync(10)
  let hash = bcrypt.hashSync(password + process.env.SECRET_PASS, salt)
  return hash
}

function compareHash(pw = '', db_pass = '') {
  return bcrypt.compareSync(pw + process.env.SECRET_PASS, db_pass);
}



function generateToken(user) {
  return jwt.sign(
    user,
    process.env.SECRET_JWT,
    {
      expiresIn: 60 * 60,
      algorithm: 'HS256'
    }
  )
}

function refreshToken() {
  return bcrypt.genSalt(50)
}
