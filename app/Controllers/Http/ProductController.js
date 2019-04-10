'use strict'
const Database = use('Database')
const Product = use('App/Models/Product')

class ProductController {

	async index ({ request, response }) {
		try {
			return {
				"status": "success",
				"data": await Product.all()
			}
		}
		catch (e) {
			return {
				"status": "error",
				"data": e
			}
		}
  }

	async show ({ request, response }) {
		const key_product = request.params.id
		try {
			return {
				"status": "success",
				"data": await Product.findBy('key_product', key_product)
			}
		}
		catch (e) {
			return {
				"status": "error",
				"data": e
			}
		}
  }

}

module.exports = ProductController
