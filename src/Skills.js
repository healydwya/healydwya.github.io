import csx from './csx_app.png';
import misty from './misty.png';
import library from './library.png';
import './Skills.scss';
import { Link } from 'react-router-dom';
import roto from './roto.png';
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
                                        <h2> Algorithmic Activism </h2>
                                        <h3> Mixed Methods UX Research </h3>
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
                    <Link to="/HRI" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={misty} className="card-img misty" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Pedestrian-Robot Interaction </h2>
                                        <h3> Mixed Methods UX Research </h3>
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
                    </Link>
                </div>
                {/*                 <div className="row">
                    <div className="card">
                        <div className="row">
                            <img src={roto} className="card-img misty" alt="logo" />
                            <div className="card-text">
                                <div>
                                    <h2> Car Repair Everywhere </h2>
                                    <h3> User Research &amp; Prototyping </h3>
                                    <p className="desc"> CSX Transportation </p>
                                </div>
                                <div>
                                    <p className="long-desc"> Conducting research in rail yards to guide redesign of legacy application</p>
                                </div>
                            </div>
                        </div>
                        <div className="methods">
                            <div> Usability Testing </div>
                            <div> Ethnography </div>
                            <div> Surveys </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <img src={library} className="card-img misty" alt="logo" />
                            <div className="card-text">
                                <div>
                                    <h2> Book Scout </h2>
                                    <h3> UX Research &amp; Design </h3>
                                    <p className="desc"> Carnegie Library of Pittsburgh </p>
                                </div>
                                <div>
                                    <p className="long-desc"> Conducting research on the library book location process to improve the service design </p>
                                </div>
                            </div>
                        </div>
                        <div className="methods">
                            <div> Directed Storytelling </div>
                            <div> Usability Testing </div>
                            <div> Intercept Interviews </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Skills;