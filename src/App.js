import graphic from './HealyGraphic.PNG';
import './App.scss';
import About from './About';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <a href="/"> 
          Healy Dwyer
        </a>
        <a href="#about"> 
          About
        </a>
        <a href="#projects"> 
          Projects
        </a>
        <a href="#contact"> 
          Contact
        </a>
      </div>
      <header id="header" className="App-header">
        <div className="header-text">
          <div>
            <h1> Howdy! </h1>
            <p> I'm Healy - a bicycle-riding software engineer, transportation advocate, and @CMUHCII graduate student. </p>
            <button> Let's rodeo </button>
          </div>
          <img src={graphic} className="App-logo" alt="logo" />
        </div>
      </header>
      <div id="about">
          <About></About>
      </div>
    </div>
  );
}

export default App;
