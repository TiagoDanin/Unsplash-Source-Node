const request = require('request-promise-native')

function classFix() {
	this.random = (this.random == false) ? false : this.random || this.param.random
	this.username = (this.username == false) ? false : this.username || this.param.username
	this.user = (this.user == false) ? false : this.user || this.param.user
	this.like = (this.like == false) ? false : this.like || this.param.like
	this.collection = (this.collection == false) ? false : this.collection || this.param.collection
	this.collection_id = (this.collection_id == false) ? false : this.collection_id || this.param.collection_id
	this.daily = (this.daily == false) ? false : this.daily || this.param.daily
	this.weekly = (this.weekly == false) ? false : this.weekly || this.param.weekly
	this.search = (this.search == false) ? false : this.search || this.param.search
	this.keyword = (this.keyword == false) ? false : this.keyword || this.param.keyword
	this.width = (this.width == false) ? false : this.width || this.param.width
	this.height = (this.height == false) ? false : this.height || this.param.height
	this.photo = (this.photo == false) ? false : this.photo || this.param.photo
	this.photo_id = (this.photo_id == false) ? false : this.photo_id || this.param.photo_id
	return module.exports(this)
}

async function redirectURL(url, uri) {
	const data = await request({
		baseUrl: url,
		uri: uri,
		resolveWithFullResponse: true
	})
	return data.request.uri.href
}

module.exports = function(param) {
	const url = 'https://source.unsplash.com'
	let uri = '/'

	if (param.random) {
		uri += `random/`
	}

	if (param.photo) {
		uri += `${param.photo}/`
	} else if (param.photo_id) {
		uri += `${param.photo_id}/`
	}

	if (param.username) {
		uri += `user/${param.username}/`
	} else if (param.user) {
		uri += `user/${param.user}/`
	}
	if (param.likes) {
		uri += `likes/`
	}

	if (param.collection) {
		uri += `collection/${param.collection}/`
	} else if (param.collection_id) {
		uri += `collection/${param.collection_id}/`
	}

	if (param.daily) {
		uri += `daily/`
	} else if (param.weekly) {
		uri += 'weekly/'
	}

	if (param.width && param.height) {
		uri += `${param.width}x${param.height}/`
	}

	if (param.search) {
		uri += `?${param.search}/`
	} else if (param.keyword) {
		uri += `?${param.keyword}/`
	}

	//Class
	this.param = param
	this.get = classFix
	if (param.redirectURL) {
		return redirectURL(url, uri)
	} else {
		return `${url}${uri}`
	}
}
