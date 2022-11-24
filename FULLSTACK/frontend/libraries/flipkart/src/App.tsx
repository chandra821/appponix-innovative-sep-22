import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Contact} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jewlry } from './pages/jewlry/Jewlry';
import { Covid } from './pages/login/Covid';
export const App=()=>{
  return (<><Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    < Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<h1>hello i am chandra</h1>}/>
      < Route path='/jewlry' element={<Jewlry/>}/>
      < Route path='/login' element={<Covid/>}/>
    </Routes>
    </Router> 
    </>)
}
