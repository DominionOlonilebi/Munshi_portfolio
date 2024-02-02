import './App.css';
import Navbars from './Components/Navbars';
import Background from './Components/Background';
import About from './Components/About';
import Cards from './Components/Cards';
import Footers from './Components/Footers';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimony';
import Team from './Components/Team';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbars/>
    <Background/>
    <About/>
    <Cards/>
    <Portfolio/>
    <Testimonial/>
    <Team/>
    <Contact/>
    <Footers/>
    </div>
  );
}

export default App;
