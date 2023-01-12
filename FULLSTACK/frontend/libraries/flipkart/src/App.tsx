import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Contact,MyLogin} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jewlry } from './pages/jewlry/Jewlry';
import { Covid } from './pages/covid/Covid';
import { Layout } from './pages/layout';
import { Register } from './pages/auth/register/Register'
export const App=()=>{
  return (<><Router>
     <Layout>
    <Routes>
    <Route path='/' element={<Home/>}/>
    < Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<h1>hello i am chandra</h1>}/>
      < Route path='/jewlry' element={<Jewlry/>}/>
      < Route path='/covid' element={<Covid/>}/>
      < Route path='/login' element={<MyLogin/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes></Layout>
    </Router> 
    </>)
}
