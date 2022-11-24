import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { jewlrydata } from "../../api/jewlry.api"
import { Card2 } from "../../components/mycards/Card2"


interface Ijewlry{}
interface Irating {
    count?: number,
    rate: number
}
interface Ijuewlrypro {
    category: string,
    description: string,
    id: number,
    image: string
    price: number
    rating: Irating
    title: string

}
export const Jewlry:React.FC<Ijewlry>=(props)=>{
    var [localstate,setLocalstate]=useState<Ijuewlrypro[]>([])
    useEffect(()=>{
        jewlrydata().then((a)=>{
            setLocalstate(a)
           
        })
    },[])
    
   console.log(localstate[0]?.category)
   var my=localstate.map((p:any) => {
    return <>
            <Card2 description={p.description} image={p.image} price={p.price} rating={p.rating} title={p.title} />
    </>
    


})
    return <>
     <h1>category:{localstate[0]?.category}</h1>
     <Container>
     <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
{my}
        </Grid>
     </Container>
     
    {/* {localstate.map((d:any)=>{return <><Card2 description={"kkk"} image={"ll"} price={d.price} rating={{count:7,rate:6}} title={"mm"}/></>})}
     <Card2 description={"kkk"} image={"ll"} price={0} rating={{count:7,rate:6}} title={"mm"}/>
     */}
     </>
}