export const coviddata=async()=>{
    var data=fetch('https://data.covid19india.org/data.json')
    return await (await data).json()
    console.log(data)
    }