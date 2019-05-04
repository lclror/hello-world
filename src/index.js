function foo(source) {
<<<<<<< HEAD
	const arr = ['master01', 'master02', 'master03-github-fixed', 'master04', 'master05']
=======
	const arr = ['master01', 'master02', 'master03-github-fixed', 'master04', 'master05-github-fixed']
>>>>>>> refs/remotes/origin/master
	if(arr.include(source)) return true
}
