import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import cowgirl from './cowgirl.PNG';
import steelers from './steelers.PNG';
import healy from './healy.PNG';
import Button from 'react-bootstrap/Button';
import jags from './jags.PNG';
import './App.scss';
import Skills from './Skills';
import Footer from './Footer';
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
            <header id="header" className="App-header scene_element scene_element--fadeinup">
                <div className="header-text">
                    <div>
                        {this.state.theme === 'cowgirl' &&
                            <h1> Howdy! </h1>
                        }
                        {this.state.theme === 'healy' &&
                            <h1> Hello! </h1>
                        }
                        {this.state.theme === 'steelers' &&
                            <h1> Hey Yinz! </h1>
                        }
                        {this.state.theme === 'jags' &&
                            <h1> DUUUUUVAL </h1>
                        }
                        <p> I'm Healy - a bicycle-riding UX Researcher, transportation advocate, and <a rel="noreferrer" target="_blank" className="bounce" href="https://www.hcii.cmu.edu/academics/mhci">@CMUHCII</a> graduate student. </p>
                        <p className="small-text"> For more fun, try <a onClick={(e) => this.changeTheme('cowgirl', e)} href="/"> Western, </a> <a className="bounce" onClick={(e) => this.changeTheme('jags', e)} href="/"> Jacksonville, </a>  or <a className="bounce" onClick={(e) => this.changeTheme('steelers', e)} href="/"> Pittsburgh Mode </a> </p>
                        {this.state.theme === 'cowgirl' &&
                            <Link to="/work" className="link-body">
                                <Button>Let's rodeo </Button>
                            </Link>
                        }
                        {this.state.theme === 'healy' &&
                            <Link to="/work" className="link-body">
                                <Button> View Projects </Button>
                            </Link>
                        }
                        {this.state.theme === 'steelers' &&
                            <Link to="/work" className="link-body">
                                <Button>Let's get pierogis </Button>
                            </Link>
                        }
                        {this.state.theme === 'jags' &&
                            <Link to="/work" className="link-body">
                                <Button>Let's go Jags! </Button>
                            </Link>
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
                <div id="hideMe" className="arrow">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className="section" id="projects">
                    <Skills></Skills>
                </div>
                <div className="section" id="contact">
                    <Footer></Footer>
                </div>
            </header>
        );
    }
}

export default Home;
