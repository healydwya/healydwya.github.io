import './HRI.scss';
import hri1 from '../hri1.webp';
import hri2 from '../hri2.png';
import hri4 from '../hri3.png';
import hri3 from '../hri4.JPG';
import paper from '../HRI_paper.png';
import conf from '../HRI_Conf.png';
import pdd2 from '../pdd2.webp';
import hri5 from '../hri5.png';
import pdd1 from '../PDD1.jpg';
import survey from '../hrisurvey.png';
import chart from '../barchart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGrinStars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

function HRI(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="hri-page">
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
            <h1 className="title">
                Pedestrian-Robot Interaction
            </h1>
            <div className="work-img row">
                <img src={hri1} alt="logo" />
                <img src={pdd2} alt="logo" />
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> My Role </div>
                    <ul>
                        <li><b>Ran 16 in-person user tests </b> with four cases to study the effects of sound on pedestrian-robot interaction </li>
                        <li> <b>Led interviews </b> alongside field observations and in-person user study</li>
                        <li> Programmed robot to standardize test cases using <b> Javascript and Misty Robot Developer API </b> </li>
                        <li> <b> Presented recommendations</b> to stakeholders, city planners, and policymakers at Pittsburgh PDD (Personal Delivery Device) Steering Committee </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> Overview </div>
                    <p> I conducted research on the rollout of sidewalk delivery robots in Pittsburgh and investigated ways to <b>improve human-robot interaction in a pedestrian setting. </b> </p>
                    <p> After synthesizing findings from observations, interviews, and our user study, I then presented insights and recommendations to the City of Pittsburgh's Department of Mobility and Infrastructure, representatives from the American Association of People with Disabilities, and leaders from Kiwibot, the delivery robot company. </p>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Problem </div>
                    <p className="question"> Personal Delivery Devices (PDDs) were legalized in 2020 to operate as legal "pedestrians" in the state of Pennsylvania, operating on sidewalks at up to 12 mph and weighing up to 550 lbs without goods on them. </p>
                    <p> This has led to a host of accessibilty issues, safety concerns, and questions from residents on what this means for the future of our sidewalks. </p>
                </div>
            </div>
            <div className="row">
                <div className="team">
                    <div className="title"> Collaborators </div>
                    <p className="members"> Jacqueline Liao, David Weinberg, Sarah Fox, Nik Martelaro, Kiwibot, City of Pittsburgh Mobility and Infrastructure</p>
                    <div className="work-img">
                        <img src={hri3} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="methods">
                    <div className="title"> Methods </div>
                    <h2> Experimental Design </h2>
                    <p> I wrote the JavaScript code for the four conditions we would test in our <b> within subjects </b>study. This would ensure each participant would experience conditions the same way with no variation in speed or timing.</p>
                    <p> To avoid novelty or training effects, we <b> counterbalanced participants</b> so they would evenly experience the conditions in different orders.</p>
                    <p> To offset the effect of proxemics on our test conditions, we taped a line on the floor that each participant would walk on. Then the robot would roll by them and play a <b> harmonic, mechanical, or verbal</b> sound at the five-second mark, with silence as the control condition.</p>
                    <div className="work-img">
                        <img src={hri4} alt="participant walking next to misty robot" />
                    </div>
                    <p> Participants after each condition would fill out a short <b> Likert Scale-based survey</b> to test common principles of discomfort to gauge how sound was effecting their perception and feelings. </p>
                    <div className="work-img">
                        <img src={survey} alt="survey that was given to each participant" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Harmonic sound significantly increased pedestrian perception of robots as "sociable and not awkward". </h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> No voice at all is little bit weird, I expected it to say something or make some sound instead of following me silently </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="work-img">
                        <img src={chart} alt="quantitative results of study displayed in bar chart with verbal and harmonic being most sociable" />
                    </div>
                    <h2> Field Study </h2>
                    <p> As part of a collaboration with Kiwibot, the City of Pittsburgh, and Carnegie Mellon I conducted <b>field observations and intercept interviews </b> from September - December 2021 during a pilot rollout of delivery robots. </p>
                    <p> I spent time getting to know the area and neighborhood the deployment was running in, working with the robotics company, and synthesizing findings with colleagues to <b> discover common themes.</b>  </p>
                    <p> This process underscored the importance of blending in for this more ethnographic study and how <b> taking notes or jottings during intercept interviews could change the dynamic </b> between the interviewee and me. It was a great lesson in how to balance immersing myself in a setting to emphathize with users while still ensuring I noted down the most accurate information possible. </p>
                    <div className="work-img">
                        <img src={pdd1} alt="delivery robots rolling on the sidewalk in Bloomfield, Pittsburgh" />
                    </div>
                    <div className="work-img">
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Communication between robots and pedestrians is crucial to increase comfort and safety on the sidewalk.  </h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> The message helped me with my awareness that it was there </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="work-img">
                        <img src={hri5} alt="screenshot of zoom storyboarding research session" />
                        <img src={hri2} alt="screenshot of zoom storyboarding research session" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2>Did you know it carries Pizza? That seems like an expensive way to deliver Pizza.</h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> People need context and transparency as to what the purpose of PDDs are. </h2>
                    </div>
                </div>
            </div>
            <div id="final-sol" className="row">
                <div className="solution">
                    <div className="title"> Findings </div>
                    <p className="solution"> Robots in pedestrian settings should employ <b> clear communication </b> and <b> audio + visual cues</b> to alert humans of their intent. Context and proxemics matter here and must be taken into consideration when choosing specific sounds. </p>
                    <p className="solution"> Further research needs to be done on how to ensure these devices do not cause mobility problems for people with disabilities, and the study should encompass more of the city with a wide range of neighborhoods. </p>
                    <div className="work-img">
                    </div>
                </div>
            </div>
            <div id="impact" className="row">
                <div className="solution">
                    <div className="title"> Impact </div>
                    <p className="solution"> Presented recommendations to City of Pittsburgh Department of Mobility and Infrastructure, Kiwibot, and the Bloomfield Development Corporation. <br></br></p>
                    <p className="solution"> Guided future city policy on deployments and pilot testing of PDDs to include more testing with people with disabilities and a wider range of topographies and neighborhoods. Influenced future design of delivery robots to include additional communication and transparency in both visual and audible forms with passing pedestrians. </p>
                    <p className="solution"> Presented findings and published research at the IEEE / ACM Conference on Human-Robot Interaction at the <a target="_blank" href="https://sites.google.com/view/hripublicspaces2022/schedule?authuser=0" rel="noreferrer">HRI in Public Spaces Workshop. </a> </p>
                    <div className="impact-img">
                        <img src={paper} alt="screenshot of research paper" />
                        <img src={conf} alt="screenshot of zoom presentation at HRI conference" />
                    </div>
                </div>
            </div>
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
        </div >
    );
}

export default HRI;