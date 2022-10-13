import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import MainRoutes from './Router/MainRoutes';

function App() {
  return (
    <div className="App">
     
   <Navbar/>
   <div >
      <MainRoutes/>
       </div>
   <Footer/>
    </div>
  );
}

export default App;
