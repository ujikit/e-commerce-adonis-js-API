'use strict'
const Order = use('App/Models/Order')

class OrderController {

	async index ({ request, response }) {
		try {
			return {
				"status": "success",
				"data": await Order.all()
			}
		}
		catch (e) {
			return {
				"status": "error",
				"data": e
			}
		}
	}

	async store ({ request, response }) {
		const fetch_all_order1 = await Order.all()
		const fetch_all_order2 = fetch_all_order1.toJSON()
		const check_exist_product_cart1 = fetch_all_order2.map( item => item.key_order)
		const { key_product, category_product, name_product, price_product, image_product, description_product } = request.all()
		for (var i = 0; i < check_exist_product_cart1.length; i++) {
			if (check_exist_product_cart1[i] === key_product) {
				return {
					"status": "error",
					"data": "Sorry, we found duplicates data in cart. Check again your current selected product in cart :)"
				}
			}
		}
		// ready saving into database
		const order = new Order()
		order.id_product_order = key_product
		order.category_order = category_product
		order.name_order = name_product
		order.name_order = name_product
		order.price_order = price_product
		order.image_order = image_product
		order.description_order = description_product
		await order.save()
		try {
			return {
				"status": "success",
				"data": "Successfully add to cart :)"
			}
		}
		catch (e) {
			return {
				"status": "error",
				"data": `Error while saving data into cart: ${e}`
			}
		}
	}

	async update ({ request, response }) {
		const { data_update } = request.all()
		return data_update
	}

	async destroy ({ request, response }) {
		const key_order = request.params.id
		const user = await Order.find(key_order)
		await user.delete()
		try {
			return {
				"status": "success",
				"data": "Successfully delete cart item :)"
			}
		}
		catch (e) {
			return {
				"status": "error",
				"data": `Error while delete cart item: ${e}`
			}
		}
	}

}

module.exports = OrderController
