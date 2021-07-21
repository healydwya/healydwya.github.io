import cowgirl from './cowgirl.PNG';
import steelers from './steelers.PNG';
import healy from './healy.PNG';
import lowercase from './lowercase.PNG';
import Button from 'react-bootstrap/Button';
import jags from './jags.PNG';
import './App.scss';
import About from './About';
import Skills from './Skills';
import Expire from './Expire';
import Footer from './Footer';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: 'healy'};
  }

  changeTheme(theme, e) {
    e.preventDefault();
    this.setState({
      theme: theme
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="menu">
            <a className="web-name" href="/"> 
              Healy Dwyer
            </a>
            <a className="mobile-name" href="/"> 
              <img src={lowercase} alt="logo" />
            </a>
  {/*           <div className="sub-menu">
              <a href="#about"> 
                About
              </a>
              <a href="#projects"> 
                Projects
              </a>
              <a href="#contact"> 
                Contact
              </a>
            </div> */}
          </div>
          <header id="header" className="App-header">
            <div className="header-text">
              <div>
              {this.state.theme === 'cowgirl' &&
                <h1> Howdy! </h1>
              }
              {this.state.theme === 'healy' &&
                <h1> Hello! </h1>
              }
              {this.state.theme === 'steelers' &&
                <h1> Hey Yinz Guys! </h1>
              }
              {this.state.theme === 'jags' &&
                <h1> DUUUUUVAL </h1>
              }
                <p> I'm Healy - a bicycle-riding software engineer, transportation advocate, and <a href="https://www.hcii.cmu.edu/academics/mhci">@CMUHCII</a> graduate student. </p>
                <p className="small-text"> For more fun, try <a onClick={(e) => this.changeTheme('cowgirl', e)} href="/"> Western, </a> <a onClick={(e) => this.changeTheme('jags', e)} href="/"> Jacksonville, </a>  or <a onClick={(e) => this.changeTheme('steelers', e)} href="/"> Pittsburgh Mode </a> </p>
                {this.state.theme === 'cowgirl' &&
                  <Button href="mailto:healydwyer@gmail.com" rel="noreferrer" target="_blank">Let's rodeo </Button>
                }
              {this.state.theme === 'healy' &&
                  <Button href="mailto:healydwyer@gmail.com" rel="noreferrer" target="_blank">Let's connect </Button>
                }
              {this.state.theme === 'steelers' &&
              <Button href="mailto:healydwyer@gmail.com" rel="noreferrer" target="_blank">Let's get pierogis </Button>              }
                {this.state.theme === 'jags' &&
                <Button href="mailto:healydwyer@gmail.com" rel="noreferrer" target="_blank">Let's go Jags! </Button>
                }
              </div>
              <div>
              {this.state.theme === 'cowgirl' &&
                <img src={cowgirl} className="App-logo" alt="logo" />
              }
              {this.state.theme === 'healy' &&
                <img src={healy} className="App-logo" alt="logo" />
              }
              {this.state.theme === 'steelers' &&
                <img src={steelers} className="App-logo" alt="logo" />
              }
                {this.state.theme === 'jags' &&
                <img src={jags} className="App-logo" alt="logo" />
              }
              </div>
            </div>
          </header>
          <Expire delay="5500"> 
            <div id="hideMe" className="arrow bounce">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </Expire>
          <div id="about">
              <About></About>
          </div>
          <div id="skills">
              <Skills></Skills>
          </div>
        </div>
        <Footer></Footer>
      </div>
     
    );
  }
}

export default App;
