import { useInView } from 'react-intersection-observer';
import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';
import './App.css';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Links from './components/Links';






function App() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  
  const { ref: projectsRef, inView: projectVisible } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  const { ref: achievementsRef, inView: achievementsVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: contactRef, inView: contactVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className="App">
      <div className="section">

      </div>
      <div className="section">
        <Links/>
        <Introduction/>
        <About/>
        <Timeline/>    
        <div ref={ref}>
          <Skills isVisible={inView}/> 
        </div>
        <div ref={projectsRef}>
          <MyProjects isVisible={projectVisible}/>
        </div>
        <div ref={achievementsRef}>
        <Achievements isVisible={achievementsVisible}/>
        </div>

        <div ref={contactRef}>
        <Contact isVisible={contactVisible}/>
        </div>

      </div>
      <div className="section">

      </div>

    </div>
  );
}

export default App;
