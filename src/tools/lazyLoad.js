module.exports = path => {
	if(TARGET === 'node') {
		return path => require(path + '.vue')
	}
	else {
		// for target === 'web'
		path => () => import(path + '.vue')
	}
}
