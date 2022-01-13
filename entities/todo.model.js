
const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
  name: "Users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },

    user_id: {
        type: "int",
        nullable: true,
    },

    title: {
        type: "varchar",
        nullable: true,
    },

    description: {
        nullable: true,
      type: "varchar"
    },

    date_created: {
      type: "datetime",
      default: Date.now()
    },

    date_updated: {
      type: "datetime",
      default: Date.now()
    }



  }
})
