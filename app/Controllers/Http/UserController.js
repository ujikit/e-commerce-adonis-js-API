'use strict'
const User = use('App/Models/User')

class UserController {

	async index({request, auth, response}) {
		return {
			"user": await User.all()
		}
	}

}

module.exports = UserController
