import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Contact} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
export const App=()=>{
  return (<><Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    < Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<h1>hello i am chandra</h1>}/>
    </Routes>
    </Router> 
    </>)
}
