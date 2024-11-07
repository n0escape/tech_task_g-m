import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Service from './components/Service/Service';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Home />
        <About />
        <Service />
        <Contact />
      </div>
    </>
  );
}

export default App;
