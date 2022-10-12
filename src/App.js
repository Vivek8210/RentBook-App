import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     
   <Navbar/>
   <Home/>
   <Footer/>
    </div>
  );
}

export default App;
