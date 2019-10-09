const unsplash = require('.')
const assert = require('assert')

async function test() {
	const url = await unsplash({photo: 'WLUHO9A_xik', redirectURL: true})
	assert.equal(url, 'https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=f8b660d566957dd3535084dafdf19397')
	console.log('[+] +1% :)')
}
console.log('[+] Executing tests')
assert.equal(unsplash({random: true}), 'https://source.unsplash.com/random/')
assert.equal(unsplash({daily: true}), 'https://source.unsplash.com/daily/')
assert.equal(unsplash({weekly: true}), 'https://source.unsplash.com/weekly/')
assert.equal(unsplash({username: 'TiagoDanin'}), 'https://source.unsplash.com/user/TiagoDanin/')
assert.equal(unsplash({user: 'TiagoDanin'}), 'https://source.unsplash.com/user/TiagoDanin/')
assert.equal(unsplash({username: 'TiagoDanin', likes: true}), 'https://source.unsplash.com/user/TiagoDanin/likes/')
assert.equal(unsplash({user: 'TiagoDanin', likes: true}), 'https://source.unsplash.com/user/TiagoDanin/likes/')
assert.equal(unsplash({search: 'nature,water'}), 'https://source.unsplash.com/?nature,water/')
assert.equal(unsplash({keyword: 'nature,water'}), 'https://source.unsplash.com/?nature,water/')
assert.equal(unsplash({daily: true, search: 'nature,water'}), 'https://source.unsplash.com/daily/?nature,water/')
assert.equal(unsplash({photo: 'WLUHO9A_xik'}), 'https://source.unsplash.com/WLUHO9A_xik/')
assert.equal(unsplash({photo_id: 'WLUHO9A_xik'}), 'https://source.unsplash.com/WLUHO9A_xik/')
assert.equal(unsplash({photo: 'WLUHO9A_xik', width: 1600, height:900}), 'https://source.unsplash.com/WLUHO9A_xik/1600x900/')
assert.equal(unsplash({collection: '190727'}), 'https://source.unsplash.com/collection/190727/')
assert.equal(unsplash({collection_id: '190727'}), 'https://source.unsplash.com/collection/190727/')
console.log('[+] 50% OK')
test()
let myConfig = new unsplash({daily: true})
myConfig.keyword = 'nature'
assert.equal(myConfig.get(), 'https://source.unsplash.com/daily/?nature/')
myConfig.daily = false
myConfig.weekly = true
myConfig.keyword = 'blur'
assert.equal(myConfig.get(), 'https://source.unsplash.com/weekly/?blur/')
console.log('[+] 100% OK')
