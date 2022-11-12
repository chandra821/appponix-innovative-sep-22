let arr1='apple'
let arr2='ball'
let arr3='cat'
let myarray=['apple','ball','cat']
console.log(arr1)
console.log(myarray[1])
// destructring
let [apple,ball,cat]=myarray
console.log(apple)


let myproducts=['apple','ball','cat']
myproducts.map((myitem)=>{console.log(myitem)})
var obj1={a:10,b:'ball',c:'cat'}
var obj2={a:10,b:'ball',c:'cat',d:'dog'}
var obj3={a:10,b:'ball',e:'elephant'}
var myarray1=[obj1,obj2,obj3]
console.log(myarray1)
myarray1.find((myiteem)=>{console.log(myiteem)})