'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.integer('key_order').unsigned().notNullable()
      table.string('category_order', 30)
      table.string('name_order', 255)
      table.string('image_order', 255)
      table.string('price_order', 20)
      table.text('description_order')
      table.timestamps()
      table.foreign('key_order').references('key_product').inTable('products')
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
