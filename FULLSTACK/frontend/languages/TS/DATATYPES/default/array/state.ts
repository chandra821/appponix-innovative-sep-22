// console.log(1)
// setTimeout(()=>{console.log(2)},2000)
// console.log(3)
var initialstate=0
var initialstateofmunites=0
setInterval(()=>{console.log("sec",initialstate++,"minutes:",initialstateofmunites,"hours")
if(initialstate==10){
    initialstateofmunites++
    console.log("minutes",initialstateofmunites)
}
},1000)
