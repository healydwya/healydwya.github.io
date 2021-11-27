import backpack from './backpack.PNG';
import misty from './misty.png';
import library from './library.png';
import './Skills.scss';
import { Link } from 'react-router-dom';

function Skills(props) {
    return (
        <div className="skills-page">
            <div className="skills-text">
                <div className="col">
                    <Link to="/ucre" className="link-body">
                        <div className="card">
                            <div className="card-text">
                                <div>
                                    <h2> Algorithmic Activism </h2>
                                    <p className="desc"> semester-long master's research project at Carnegie Mellon Human-Computer Interaction Institute </p>
                                    <p> How might we connect and empower users to take action against algorithmic bias on social media platforms? </p>
                                </div>
                                <div class="methods">
                                    <div> Contextual Inquiry </div>
                                    <div> Think-Aloud Testing </div>
                                    <div> Speed Dating </div>
                                </div>
                            </div>
                            <img src={backpack} className="card-img" alt="logo" />
                        </div>
                    </Link>
                    <div className="card">
                        <div className="card-text">
                            <div>
                                <h2> Pedestrian-Robot Interaction </h2>
                                <p className="desc"> semester-long master's research project with the Carnegie Mellon Robotics Institute </p>
                                <p> Can we utilize sound to improve pedestrian comfort with robots that share the sidewalk? </p>
                            </div>
                            <div class="methods">
                                <div> Surveys </div>
                                <div> Experimental Design </div>
                                <div> Statistical Analysis </div>
                            </div>
                        </div>
                        <img src={misty} className="card-img" alt="logo" />
                    </div>
                    <div className="card">
                        <div className="card-text">
                            <div>
                                <h2> Responsive Website for the Pittsburgh Library </h2>
                                <p className="desc"> master's research project for the Carnegie Library and the Carnegie Mellon Human-Computer Interaction Institute </p>
                                <p> Utilizing rapid research methods to efficiently re-design a responsive website to help users locate a book from their local library.  </p>
                            </div>
                            <div class="methods">
                                <div> Think-Aloud Testing </div>
                                <div> Intercept Interviews </div>
                                <div> Literature Review </div>
                            </div>
                        </div>
                        <img src={library} className="card-img" alt="logo" />
                    </div>
                    {/*                     <div className="card">
                        <div className="card-text">
                            <h2> Community Acceptance of Delivery Robots </h2>
                            <p className="desc"> semester-long master's research project with Kiwibot and the Carnegie Mellon Human-Computer Interaction Institute </p>
                            <p> Engaging in participatory methods to observe and engage with the Pittsburgh community to guide policy and deployment surrounding delivery robots. </p>
                            <div class="methods">
                                <div> Field Observation </div>
                                <div> Intercept Interviews </div>
                                <div> Participatory Design </div>
                            </div>
                        </div>
                        <img src={backpack} className="card-img" alt="logo" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Skills;