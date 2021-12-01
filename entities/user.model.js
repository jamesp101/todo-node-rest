

const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
  name: "Users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    username: {
      type: "varchar",
      nullable: false,
      unique: true
    },
    password: {
      type: "varchar",
      nullable: false
    },
    email: {
      type: "varchar",
      nullable: false,
      unique: true
    },
    firstname: {
      type: "varchar",
      nullable: true
    },
    lastname: {
      type: "varchar",
      nullable: true
    },
    birthdate: {
      type: "date",
      nullable: true
    },
    address: {
      type: "varchar",
      nullable: true
    },
    scope: {
      type: "varchar",
      nullable: true
    }
  }
})
