'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username_user', 30).unique().comment('This is the username that related to orders table')
      table.string('firstname_user', 50)
      table.string('lastname_user', 50)
      table.string('phone_user', 13)
      table.string('photo_user', 255)
      table.string('email', 50)
      table.string('password', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
