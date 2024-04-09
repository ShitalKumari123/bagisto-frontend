
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import ShowCards from './components/ShowCards';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <Router>
   <Navbar/>
   
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/showcards' element={<ShowCards/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
