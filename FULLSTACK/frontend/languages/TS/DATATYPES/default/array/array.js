var arr1 = 'apple';
var arr2 = 'ball';
var arr3 = 'cat';
var myarray = ['apple', 'ball', 'cat'];
console.log(arr1);
console.log(myarray[1]);
// destructring
var apple = myarray[0], ball = myarray[1], cat = myarray[2];
console.log(apple);
var myproducts = ['apple', 'ball', 'cat'];
myproducts.map(function (myitem) { console.log(myitem); });
var obj1 = { a: 10, b: 'ball', c: 'cat' };
var obj2 = { a: 10, b: 'ball', c: 'cat', d: 'dog' };
var obj3 = { a: 10, b: 'ball', e: 'elephant' ,d: 'dog' };
var myarray1 = [obj1, obj2, obj3];
console.log(myarray1);
var j= myarray1.find(function (myiteem) { return myiteem.c=='cat'});
console.log(j)
var j2= myarray1.filter(function (myiteem) { return myiteem.c=='cat'});
console.log(j2)
var j2= myarray1.filter(function (myiteem) { return myiteem.d=='dog'});
console.log(j2)