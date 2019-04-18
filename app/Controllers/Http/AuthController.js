'use strict'
const Hash = use('Hash')
const User = use('App/Models/User')

class AuthController {

	async register({request, response}) {
		let {username_user, firstname_user, lastname_user, email, phone_user, password, photo_user} = request.all();
		photo_user = null
		// return {
		// 	username_user,
		// 	firstname_user,
		// 	lastname_user,
		// 	email_user,
		// 	phone_user,
		// 	password_user,
		// 	photo_user
		// }
		try {
			const user = await User.create({
				email: email,
				password: await Hash.make(password),
				firstname_user: firstname_user,
				lastname_user: lastname_user,
				username_user: username_user,
				phone_user: phone_user,
				photo_user: photo_user
			})
			return {
				status: 'success',
				data: 'Your have been successfully registered.'
			}
		}
		catch (e) {
			return {
				status: 'error',
				data: `error: ${e}`
			}
		}
	}

}

module.exports = AuthController
