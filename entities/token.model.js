
const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
  name: "RefreshToken",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    token: {
      type: "varchar",
      nullable: false,
      unique: true
    },
  }
})
