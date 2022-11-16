function marriges(pops:Imarriges){
    console.log(pops)
}
marriges({gift1:"watch",gift2:123})
marriges({gift1:"watch"})
interface Imarriges{
    gift1:string,
    gift2?:number
}