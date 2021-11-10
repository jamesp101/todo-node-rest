
const typeorm = require('typeorm')


let connection = null;

module.exports = {

  /**
   * return {typeorm.Connection}
   * **/
  getConnection: async () => {
    if (connection === null) {
      connection = await typeorm.createConnection({
        type: "sqlite",
        database: './database/database.db',
        synchronize: true,
        entities: [
          require('./entities/user.model'),
        ]
      })
    }
    return connection;
  }

}
