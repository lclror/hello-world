function squire(x) {
  return x * x
}

function cute(x) {
	return x * x * x
}

//create bugFeature1 branch fixed some bug inhere

function foo(fun1, fun2) {
	const result1 = fun1(2)
	const result2 = fun1(2)
	return result1 + result2
}

//合并commit 测试， 新建commit-m01
// code content...

//合并commit 测试， 新建commit-m02,重做这次提交
// code content...

function baz() {
	console.log('改变HEAD测试02')
}

function foo01() {
	console.log('add test: squshfoo01')
}

function foo02() {
	console.log('add test: squshfoo02')
}

const str1 = 'rebase test01-02'

var aaa = 123

var name = function (lastname) {
	return 'kiti ' + lastname
}