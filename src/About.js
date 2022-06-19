import bike from './bike.PNG';
import './About.scss';

function About(props) {
  return (
    <div className="about-page scene_element scene_element scene_element--fadeinup">
      <h1> About Me </h1>
      <div className="about-text">
        <img src={bike} className="App-logo" alt="logo" />
        <div className="col">
          <p> With <b>five years of experience</b> as a UX researcher + software engineer, my superpower is speaking the language of <b> highly technical users and products.</b> </p>
          <p>After working in industry for four years, I decided to pursue a master's degree in <b>Human-Computer Interaction</b> at <b>Carnegie Mellon University</b>. Throughout this intense, year-long program I've deepened the rigor of my research practice and gained exposure to broader perspectives, training, and robots, of course! </p>
          <p> Outside of work and school, I founded a transportation advocacy organization called <a href="http://instagram.com/bikeduval" target="_blank" rel="noreferrer"> Bike Duval </a>, served as the president of the <a href="https://www.facebook.com/bpacfriends" target="_blank" rel="noreferrer">Jacksonville Bicycle and Pedestrian Advisory Committee </a>, and previously volunteered my skills doing React Native development for the app <a href="http://bikelaneuprising.com" target="_blank" rel="noreferrer"> Bike Lane Uprising. </a> </p>
          <p> You can usually find me biking with pals, camping, or playing fetch with my big fluffy dog, Otis.</p>
        </div>
      </div>
    </div>
  );
}

export default About;