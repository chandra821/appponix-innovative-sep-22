// console.log(1)
// setTimeout(()=>{console.log(2)},2000)
// console.log(3)
var initialstate = 0;
var initialstateofmunites = 0;
setInterval(function () {
    console.log("sec", initialstate++);
    if (initialstate == 60) {
        initialstateofmunites++;
        console.log("minutes", initialstateofmunites);
    }
}, 1000);
