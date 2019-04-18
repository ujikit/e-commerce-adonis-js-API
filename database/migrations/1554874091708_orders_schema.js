'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('id_product_order').unsigned()
      table.integer('id_user_order').unsigned()
      table.string('category_product_order', 30)
      table.string('name_product_order', 255)
      table.string('image_product_order', 255)
      table.string('price_product_order', 20)
      table.text('description_product_order')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
