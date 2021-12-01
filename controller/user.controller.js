
const connection = require('../database')

module.exports = {

  allUsers: async (req, res) => {
    console.log('hELO')
    const con = await connection.getConnection()
    const repo = await con.getRepository('Users')

    const f = await repo.find()
    console.log(f)

    res.send(f)
  },
  editUser: async (req, res) => {
    res.send('Hello World')

  },

  getUser: async (req, res) => {

    res.send('User')
  },

  getOne: async (req, res) => {
    res.send('Hello Worl')
  },


  deleteUser: async (req, res) => {
    res.send('Delete')

  }

}
