const connection = require('../database');

module.exports = {
  all: async (req, res) => {
    const con = await connection.getConnection();
    const repo = await con.getRepository('Todo');

    const f = await repo.find();
    res.send(f);
  },
  
  findOne: async (req, res) => {
    const con = connection.getConnection();
    const repo = con.getRepository('Todo');
    
    try{
      const f = await repo.findOne(req.params['id']);
      res.send(f);
    }catch
    {
      res.status(404).send({message: "Not found"});
    }
    
  },
  
}
