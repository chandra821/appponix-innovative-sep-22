interface Imarrage3{
    gift?:number|boolean,
    gift2?:string|number|boolean,
}
function marrage3(props:Imarrage3){
console.log(props)
}
marrage3({gift:23,})

var glass:Iglass={
frame:'squre',
shape:'squre',
color:'red',

}
interface  Iglass{
    frame:string,
    shape:string,
    color:string,
    // spec1?:number
}
console.log(glass)
