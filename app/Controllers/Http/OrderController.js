'use strict'

class OrderController {

	async index ({ request, response }) {
		try {
			return {
				"status": "success",
				"data": [
					1,2,3,4
				]
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
		const { data_store } = request.all()
		return data_store
	}

	async update ({ request, response }) {
		const { data_update } = request.all()
		return data_update
	}

	async destroy ({ request, response }) {
		const { data_destroy } = request.all()
		return data_destroy
	}

}

module.exports = OrderController
