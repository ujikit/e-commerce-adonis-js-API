'use strict'

class ProfileController {

	async getProfile({ response, auth }) {
	  return response.send(auth.current.user)
	}

}

module.exports = ProfileController
