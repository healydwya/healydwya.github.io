import backpack from './backpack.PNG';
import './Skills.scss';

function Skills(props) {
    return (
        <div className="skills-page">
          <h1> Skills </h1>
          <div className="skills-text">
            <div className="col">
                <div> 
                    <ul>
                        <li><p> HTML5 / CSS3 </p></li>
                        <li><p> JavaScript </p></li>
                        <li><p> Angular </p></li>
                        <li><p> React.js </p></li>
                        <li><p> React Native </p></li>
                        <li><p> Sass </p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p> Git </p></li>
                        <li><p> Optimal Workshop </p></li>
                        <li><p> Node.js </p></li>
                        <li><p> SQL </p></li>
                        <li><p> NPM </p></li>
                        <li><p> Agile Methodology </p></li>
                    </ul>
                </div>
            </div>
            <img src={backpack} className="App-logo" alt="logo" />
          </div>
        </div>
    );
  }

export default Skills;