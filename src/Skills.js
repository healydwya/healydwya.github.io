import backpack from './backpack.PNG';
import misty from './misty.png';
import library from './KYB.png';
import './Skills.scss';
import { Link } from 'react-router-dom';
import bias from './bias.png';
import graphic from './graphic.png';

function Skills(props) {
    return (
        <div className="skills-page scene_element scene_element--fadeinup">
            <h1> Projects &amp; Work </h1>
            <div className="skills-text">
                <div className="row">
                    <Link to="/ucre" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={graphic} className="card-img alg" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Mixed Methods UX Researcher </h2>
                                        <p className="desc"> Carnegie Mellon Human-Computer Interaction Institute </p>
                                    </div>
                                    <div>
                                        <p className="long-desc"> Studying how to encourage everyday users to audit algorithmic bias on social media platforms </p>
                                    </div>
                                </div>
                            </div>
                            <div className="methods">
                                <div> Contextual Inquiry </div>
                                <div> Think-Aloud Testing </div>
                                <div> Python </div>
                            </div>
                        </div>
                    </Link>
                    <div className="card">
                        <div className="row">
                            <img src={misty} className="card-img misty" alt="logo" />
                            <div className="card-text">
                                <div>
                                    <h2> Mixed Methods UX Researcher </h2>
                                    <p className="desc"> Carnegie Mellon Robotics Institute + Kiwibot </p>
                                </div>
                                <div>
                                    <p className="long-desc"> Investigating the effect of sound on human perceptions of pedestrian robots that share the sidewalk</p>
                                </div>
                            </div>
                        </div>
                        <div className="methods">
                            <div> Surveys </div>
                            <div> Experimental Design </div>
                            <div> Statistical Analysis </div>
                        </div>
                    </div>
                </div>
                {/*                 <div className="row">
                    <div className="card">
                        <div className="card-text">
                            <div>
                                <h2> Responsive Website for the Pittsburgh Library </h2>
                                <p className="desc"> master's research project for the Carnegie Library and the Carnegie Mellon Human-Computer Interaction Institute </p>
                                <p> Utilizing rapid research methods to efficiently re-design a responsive website to help users locate a book from their local library.  </p>
                            </div>
                            <div className="methods">
                                <div> Think-Aloud Testing </div>
                                <div> Intercept Interviews </div>
                                <div> Literature Review </div>
                            </div>
                        </div>
                        <img src={library} className="card-img" alt="logo" />
                    </div>
                    <div className="card">
                        <div className="card-text">
                            <h2> Community Acceptance of Delivery Robots </h2>
                            <p className="desc"> semester-long master's research project with Kiwibot and the Carnegie Mellon Human-Computer Interaction Institute </p>
                            <p> Engaging in participatory methods to observe and engage with the Pittsburgh community to guide policy and deployment surrounding delivery robots. </p>
                            <div className="methods">
                                <div> Field Observation </div>
                                <div> Intercept Interviews </div>
                                <div> Participatory Design </div>
                            </div>
                        </div>
                        <img src={backpack} className="card-img" alt="logo" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Skills;