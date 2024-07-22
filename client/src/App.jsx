import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Hello from './Hello'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path='/' element={<Hello />}></Route> */}
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        
      </Routes>
    </BrowserRouter>

      
  )
}

export default App
