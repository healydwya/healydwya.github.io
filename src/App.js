import './App.scss';
import About from './About';
import Home from './Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, NavLink
} from "react-router-dom";
import Skills from './Skills';
import Ucre from './Ucre/Ucre';
import HRI from './HRI/HRI';
import Lib from './Lib/Lib';
import CSX from './CSX/CSX';
import resume from './HealyDwyerSpring22Resume.pdf';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'healy' };
  }

  changeTheme(theme, e) {
    e.preventDefault();
    this.setState({
      theme: theme
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="menu">
            <a className="web-name" href="/">
              Healy Dwyer
            </a>
            {/*             <a className="mobile-name" href="/">
              <img src={lowercase} alt="logo" />
            </a> */}
            <div className="sub-menu">
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/work'>Work</NavLink>
              <a href={resume} target="_blank" rel="noreferrer">Resume </a>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/work" element={<Skills />}>
          </Route>
          <Route path="/ucre" element={<Ucre />}>
          </Route>
          <Route path="/hri" element={<HRI />}>
          </Route>
          <Route path="/csx" element={<CSX />}>
          </Route>
          <Route path="/lib" element={<Lib />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
