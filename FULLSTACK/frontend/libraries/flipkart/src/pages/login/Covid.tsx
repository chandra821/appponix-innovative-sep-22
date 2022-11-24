import { useEffect, useState } from "react"
import { coviddata } from "../../api/covid.api"

export const Covid = () => {
    var [pro,setPro]=useState([])
   useEffect(()=>{
    coviddata().then((a)=>{
        console.log(a)
        setPro(a)
    })
   },[])
   return<>
   <h1> </h1>
   </>
}