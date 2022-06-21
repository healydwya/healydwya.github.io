import csx from './csx.png';
import books from './books.png';
import alg from './alg_act.png';
import robot from './robo.png';
import honda from './Honda/Honda_person.png';
import brain from './Brain.png';
import './Skills.scss';
import { Link } from 'react-router-dom';

function Skills(props) {
    return (
        <div className="skills-page scene_element scene_element--fadeinup">
            <h1> Projects &amp; Work </h1>
            <div className="skills-text">
                <div className="row">
                    <Link to="/CSX" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={csx} className="card-img misty" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Car Repair Everywhere </h2>
                                        <h3> User Research &amp; Engineering </h3>
                                        <p className="desc"> CSX Technology </p>
                                    </div>
                                    <div>
                                        <p className="long-desc"> Conducting research in rail yards to guide the redesign of a legacy application used for billing and tracking.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="methods">
                                <div> Contextual Inquiry </div>
                                <div> Survey Design</div>
                                <div> Usability Testing </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/HRI" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={robot} className="card-img misty" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Pedestrian-Robot Interaction </h2>
                                        <h3> Mixed Methods Research </h3>
                                        <p className="desc"> Kiwibot + PGH Dept. of Mobility &amp; Infrastructure </p>
                                    </div>
                                    <div>
                                        <p className="long-desc"> Community centered study of a deployment of autonomous delivery robots on public sidewalks. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="methods">
                                <div> Experimental Design </div>
                                <div> Ethnography </div>
                                <div> Statistical Analysis </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="row">
                    {/*                     <Link to="/ucre" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={alg} className="card-img alg" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Algorithmic Activism </h2>
                                        <h3> Mixed Methods UX Research </h3>
                                        <p className="desc"> Carnegie Mellon Human-Computer Interaction Institute </p>
                                    </div>
                                    <div>
                                        <p className="long-desc"> Analyzing methods of engagement to allow everyday users to audit algorithmic bias on social media platforms. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="methods">
                                <div> Contextual Inquiry </div>
                                <div> Think-Aloud Testing </div>
                                <div> Python </div>
                            </div>
                        </div>
                    </Link> */}
                    <Link to="/honda" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={honda} className="card-img honda" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Honda - MHCI Capstone </h2>
                                        <h3> Mixed Methods Research </h3>
                                        <p className="desc"> Honda R&amp;D Americas </p>
                                    </div>
                                    <div>
                                        <p className="long-desc"> Studying the future of user needs in self-driving, shared transportation vehicles.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="methods">
                                <div> Diary Study </div>
                                <div> Contextual Inquiry </div>
                                <div> Concept Testing </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Lib" className="link-body">
                        <div className="card">
                            <div className="row">
                                <img src={books} className="card-img misty" alt="logo" />
                                <div className="card-text">
                                    <div>
                                        <h2> Book Scout </h2>
                                        <h3> UX Research &amp; Design </h3>
                                        <p className="desc"> Carnegie Library of Pittsburgh </p>
                                    </div>
                                    <div>
                                        <p className="long-desc"> Guiding the design process for the mobile application + website used to locate and request library books. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="methods">
                                <div> Directed Storytelling </div>
                                <div> Usability Testing </div>
                                <div> Intercept Interviews </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Skills;