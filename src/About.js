import bike from './bike.PNG';
import './About.scss';

function About(props) {
    return (
        <div className="about-page">
          <h1> About Me </h1>
          <div className="about-text">
            <img src={bike} className="App-logo" alt="logo" />
            <div className="col">
              <p> With 4+ years of software engineering experience and a background in urban planning, my passion is building technology to make the world more equitable. I am currently pursuing my master's degree in Human-Computer Interaction at Carnegie Mellon University and will be open to full-time roles following graduation in August of 2022. </p>
              <p> Technology-wise, progressive web apps get my blood pumping, and I enjoy working with JavaScript frameworks such as React and Angular, delving into the world of robotics, and conducting user research to help build better products. </p>
              <p> Outside of work and school, I founded a transportation advocacy organization called <a href="http://instagram.com/bikeduval" target="_blank" rel="noreferrer"> Bike Duval </a>, served as the president of the Jacksonville Bicycle and Pedestrian Advisory Committee, and volunteer my skills doing React Native development for the app <a href="http://bikelaneuprising.com" target="_blank" rel="noreferrer"> Bike Lane Uprising. </a> You can usually find me running, cycling, hiking, camping, hanging with pals, and drinking coffee around town. </p>
            </div>
          </div>
        </div>
    );
  }

export default About;