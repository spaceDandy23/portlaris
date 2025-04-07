import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';
import './App.css';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';


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
      </div>
      <div className="section">

      </div>

    </div>
  );
}

export default App;
