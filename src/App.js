
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero/>
    </div>
  );
}

export default App;
