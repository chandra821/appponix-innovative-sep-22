import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

interface IMyAtocomplete{}
export const MyAtocomplete:React.FC<IMyAtocomplete>=()=>{
    var[movies,setmovies]=useState()
    var handleOnchange=(e:any,val:any)=>{
        console.log(val)
        setmovies(val.label)
    }
    return<>
    <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={mydata}
  sx={{ width: 300 }}
  onChange={handleOnchange}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
{movies}
    </>
}
var mydata=[
    {label:'kantara',value:'1'},
    {label:'kgf',value:'2'},
    {label:'baap ka naam kya',value:'3'},
    {label:'kbc',value:'4'}
]