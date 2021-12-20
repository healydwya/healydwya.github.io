import lowercase from './lowercase.PNG';
import './App.scss';
import About from './About';
import Home from './Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";
import Skills from './Skills';
import Ucre from './Ucre/Ucre';
import HRI from './HRI/HRI';
import resume from './Healy_Dwyer_2021_resume.pdf';

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
            <a className="mobile-name" href="/">
              <img src={lowercase} alt="logo" />
            </a>
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
        </Routes>
      </Router>
    );
  }
}

export default App;
