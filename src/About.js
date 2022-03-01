import bike from './bike.PNG';
import './About.scss';

function About(props) {
  return (
    <div className="about-page scene_element scene_element scene_element--fadeinup">
      <h1> About Me </h1>
      <div className="about-text">
        <img src={bike} className="App-logo" alt="logo" />
        <div className="col">
          <p> With <b>4+ years of experience as a UX researcher + engineer </b> along with a background in urban planning, my passion is building technology to improve the systems that shape our world. My unique background allows me to <b>translate user behavior and desires into design and development direction. </b></p>
          <p> Having worked as both a software engineer and researcher, my strengths lie in <b> technical HCI</b> and <b> research through prototyping. </b>I bring a well-rounded perspective to communicating insights and brainstorming solutions with product managers, designers, researchers, and engineers. </p>
          <p>I am currently pursuing my master's degree in <b> Human-Computer Interaction</b> at <b>Carnegie Mellon University</b> and will be open to full-time roles following graduation in August of 2022. </p>
          <p> Outside of work and school, I founded a transportation advocacy organization called <a href="http://instagram.com/bikeduval" target="_blank" rel="noreferrer"> Bike Duval </a>, served as the president of the <a href="https://www.facebook.com/bpacfriends" target="_blank" rel="noreferrer">Jacksonville Bicycle and Pedestrian Advisory Committee </a>, and previously volunteered my skills doing React Native development for the app <a href="http://bikelaneuprising.com" target="_blank" rel="noreferrer"> Bike Lane Uprising. </a> </p>
          <p> You can usually find me biking with pals, camping, or playing fetch with my big fluffy dog, Otis.</p>
        </div>
      </div>
    </div>
  );
}

export default About;