import NavBar from './components/navbar';
import Banner from './components/Banner';
import Skills from "./components/skills";
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import Contacts from "./components/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    {/* <Contact/>  */}
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
