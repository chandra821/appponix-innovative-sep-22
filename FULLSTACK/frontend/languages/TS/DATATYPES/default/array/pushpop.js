// var myarray2 =[1,2,"cbc"]
// console.log(myarray2)
// myarray2.push(9)
// console.log(myarray2)
// myarray2.pop()
// console.log(myarray2)
var myarray2 = [1, 2, "cbc"];
function state() {
    console.log(myarray2);
    var user = document.getElementById('root').value;
    console.log(user);
    myarray2.push(user);
    console.log(myarray2);
}
