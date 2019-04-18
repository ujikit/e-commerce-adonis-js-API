'use strict'
const mysql = require('mysql')
const Route = use('Route')

// Login
Route.post('/register', 'AuthController.register')

// Profile
// Route.group(() => {
// 	Route.get('user/:id', 'ProfileController.getProfile').middleware(['auth:jwt'])
// }).prefix('api/v1')

// Products
Route.group(() => {
	Route.get('products', 'ProductController.index')
	Route.get('product/:id', 'ProductController.show')
}).prefix('api/v1')

// Carts
Route.group(() => {
	Route.get('orders', 'OrderController.index')
	Route.post('order', 'OrderController.store')
	Route.patch('order/:id', 'OrderController.update')
	Route.delete('order/:id', 'OrderController.destroy')
}).prefix('api/v1')
