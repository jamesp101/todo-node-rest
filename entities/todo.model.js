

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

    },

    title: {
      type: "varchar"
    },

    description: {
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
