export const Pokimondata=async()=>{
    var PokimonData=fetch('https://pokeapi.co/api/v2/pokemon/')
    var data=await (await PokimonData).json()
   // console.log(data)
    return data
}