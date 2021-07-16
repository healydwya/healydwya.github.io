import cowgirl from './cowgirl.PNG';
import steelers from './steelers.PNG';
import healy from './healy.PNG';
import './App.scss';
import About from './About';
import React from 'react';

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
            {this.state.theme === 'cowgirl' &&
              <h1> Howdy! </h1>
            }
             {this.state.theme === 'healy' &&
              <h1> Hello! </h1>
            }
             {this.state.theme === 'steelers' &&
              <h1> Hey Yinz Guys! </h1>
            }
              <p> I'm Healy - a bicycle-riding software engineer, transportation advocate, and <a href="https://www.hcii.cmu.edu/academics/mhci">@CMUHCII</a> graduate student. </p>
              <p className="small-text"> For more fun, try <a onClick={(e) => this.changeTheme('cowgirl', e)} href="/"> Western Mode </a> or <a onClick={(e) => this.changeTheme('steelers', e)} href="/"> Pittsburgh Mode </a> </p>
              {this.state.theme === 'cowgirl' &&
                <button> Let's rodeo </button>
              }
             {this.state.theme === 'healy' &&
                <button> Let's connect </button>
              }
             {this.state.theme === 'steelers' &&
                <button> Let's get pierogis </button>
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
            </div>
          </div>
        </header>
        <div id="about">
            <About></About>
        </div>
      </div>
    );
  }
}

export default App;
