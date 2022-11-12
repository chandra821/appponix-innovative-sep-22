let sum=()=>{console.log('i am sum')}
sum();
function parent1(num:number,myfunc:()=>void){
    console.log(num)
    console.log(myfunc)
    myfunc()
}
parent1(1,sum)
var y=()=>{console.log('chandra')}
y()
function x(){
    y()
}
x()