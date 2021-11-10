
const connection = require('../database')

const SECRET = "123456"

module.exports = {

  login: async (email = undefined, username = undefined, password = '') => {
    let con = await connection.getConnection()
    let repo = con.getRepository('Users')

    let user = (email == undefined)
      ? await repo.findOne({ username: username, password: password })
      : await repo.findOne({ email: email, password: password })

    if (user == undefined || user == null)
      throw Error('User not found')


    delete user['password']
    return user;

  },

  register: async (user) => {
    let con = await connection.getConnection()
    let repo = con.getRepository('Users')
    await repo.save(user)
  }

}

