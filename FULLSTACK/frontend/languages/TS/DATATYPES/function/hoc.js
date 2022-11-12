var sum = function () { console.log('i am sum'); };
sum();
function parent1(num, myfunc) {
    console.log(num);
    console.log(myfunc);
    myfunc();
}
parent1(1, sum);
var y = function () { console.log('chandra'); };
y();
function x() {
    y();
}
x();
