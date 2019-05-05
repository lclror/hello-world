function foo(source) {
	const arr = ['master01', 'master02', 'master03-github-fixed', 'master04', 'master05-github-fixed', 'master06-local-fixed']
	if(arr.include(source)) return true
}
