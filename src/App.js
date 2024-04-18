
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import ShowCards from './components/ShowCards';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NewProducts from './components/NewProducts'
import ProductDetails from './components/ProductDetails';
import Men from './components/Men';
import ShowCardDup from './components/ShowCardDup';
import Admin from './components/Admin';
import Login from './components/Login';
import ViewProfile from './components/ViewProfile';
function App() {
  return (
    <div className="App">
   <Router>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/showcards' element={<ShowCards/>}/>
      <Route path='/productdetails' element={<ProductDetails/>}/>
      <Route path='/men/:character' element={<Men/>}/>
      <Route path='/scd' element={<ShowCardDup/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/viewprofile' element={<ViewProfile/>}/>
    </Routes>
    {/* <NewProducts/>     */}
   </Router>
    </div>
  );
}

export default App;
