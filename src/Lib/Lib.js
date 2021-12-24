import './Lib.scss';
import zoom from './zoom_lib.png';
import libgif from './libgif.gif';
import bookscout from './bookscout.png';
import comp1 from './comp1.png';
import comp2 from './comp2.png';
import desktop from './desktopfinal.png';
import mobile from './mobilefinal.png';
import journeymap from './journeymap.png';
import counter from './lib_counter.png';
import library from './library.png';
import map from './map.png';
import wireframe from './wireframecrit.png';
import proto from './proto1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGrinStars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

function Lib(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="lib-page">
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
            <h1 className="title">
                Book Scout
            </h1>
            <div className="work-img title">
                <img src={bookscout} alt="logo" />
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> My Role </div>
                    <ul>
                        <li><b>Led intercept interviews </b>at two local library branches and directed storytelling with library goers and librarians</li>
                        <li> <b>Uncovered key pain points</b> in the library book locating process</li>
                        <li> Collaborated with design team to <b>synthesize user research into prototypes for evaluative research </b> </li>
                        <li> Conducted <b> think-alouds for usability testing</b> with lo-fi prototypes</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> Overview </div>
                    <p> Conducted rapid research in order to <b>improve the process of locating a book  </b>at a local library. Our team decided to narrow our scope due to the four week timeline to focus specifically on the <b>online search process.</b>  </p>
                    <p> Our solution focused specifically on a common problem library-goers have - <b>users want to visit their nearest branch but also usually want the book as soon as possible. </b> We designed prototypes that balanced users' needs to visit their nearby branch with their desire to pick up a book as soon as possible. </p>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Problem </div>
                    <p className="question"> People often have trouble with many aspects of locating a library book. These issues include <b> differentiating by category (ex: audio, print, large print, etc)</b>, knowing <b>which library location </b> to look at, and seeing <b>when a book will be ready for pick up. </b> </p>
                    <p> This can lead to users turning to other services such as big-box stores like Amazon instead of supporting their local libraries. Even if people decide to stick it out with the library, they often find it <b> confusing and are frustrated by the lack of transparency</b> throughout the process. </p>
                </div>
            </div>
            <div className="row">
                <div className="team">
                    <div className="title"> Collaborators </div>
                    <p className="members"> Josh Suber, Yo-Lei Chen, Adrian Ma</p>
                    <div className="work-img">
                        <img src={library} alt="logo" />
                        <img src={map} alt="logo" />
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
                    <div className="work-img row">
                        <img src={comp2} alt="participant walking next to misty robot" />
                    </div>
                    <p> Participants after each condition would fill out a short <b> Likert Scale-based survey</b> to test common principles of discomfort to gauge how sound was effecting their perception and feelings. </p>
                    <div className="work-img">
                        <img src={journeymap} alt="survey that was given to each participant" />
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
                        <img src={proto} alt="quantitative results of study displayed in bar chart with verbal and harmonic being most sociable" />
                    </div>
                    <div className="work-img">
                        <img src={wireframe} alt="quantitative results of study displayed in bar chart with verbal and harmonic being most sociable" />
                    </div>
                    <h2> Field Study </h2>
                    <p> As part of a collaboration with Kiwibot, the City of Pittsburgh, and Carnegie Mellon I conducted <b>field observations and intercept interviews </b> from September - December 2021 during a pilot rollout of delivery robots. </p>
                    <p> I spent time getting to know the area and neighborhood the deployment was running in, working with the robotics company, and synthesizing findings with colleagues to <b> discover common themes.</b>  </p>
                    <p> This process underscored the importance of blending in for this more ethnographic study and how <b> taking notes or jottings during intercept interviews could change the dynamic </b> between the interviewee and me. It was a great lesson in how to balance immersing myself in a setting to emphathize with users while still ensuring I noted down the most accurate information possible. </p>
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
                        <img src={zoom} alt="screenshot of zoom storyboarding research session" />
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
                        <img src={libgif} alt="screenshot of zoom storyboarding research session" />
                    </div>
                </div>
            </div>
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
        </div >
    );
}

export default Lib;