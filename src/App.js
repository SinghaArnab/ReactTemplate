import './App.css';
import Navbar from './components/Layouts/Navbar';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>  
    </div>
  );
}

export default App;
