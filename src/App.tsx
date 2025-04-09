import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';
import './App.css';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <div className="section">

      </div>
      <div className="section">
        <Introduction/>
        <About/>
        <Timeline/>     
        <Skills/> 
        <MyProjects/>
        <Achievements/>
        <Contact/>
      </div>
      <div className="section">

      </div>

    </div>
  );
}

export default App;
