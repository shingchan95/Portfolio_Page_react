import Navbar from './components/Navbar';
import Homepage from './components/Home';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
