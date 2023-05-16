import Todo from './Todo';
import Nav from './component/Nav';
import Homes from './component/Homes';
import Home from './component/Home';
import About from './component/About';
import Clsy from './Clsy';
import Trans from './Trans';
import Wiki from './Wiki';

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className='p1'>
    
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/Homes" element={<Homes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/Clsy" element={<Clsy/>}/>
        <Route path="/Wiki" element={<Wiki/>}/>
        <Route path="/Trans" element={<Trans/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>

  );
}
export default App;