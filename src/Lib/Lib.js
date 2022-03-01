import './Lib.scss';
import zoom from './zoom_lib.png';
import libgif from './libgif.gif';
import bookscout from './bookscout.png';
import comp2 from './comp2.png';
import journeymap from './journeymap.png';
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
                    <h2> Observations &amp; Intercept Interviews </h2>
                    <p> As our service area was quite broad, simply locating an available library book, we set out to understand all the different ways someone could locate a book. This could be digitally, physically, through delivery services, or even AR. We strategized how to ensure we were hearing <b> diverse and well-rounded perspectives</b> in a week of rapid research. We delegated the work so that I took on the in-person intercept interviews and observations, as I had experience doing so. Our research goals were as follows: </p>
                    <ul>
                        <li>Understand the current process of locating an available library book  </li>
                        <li>Highlight pain points and areas of improvement  </li>
                        <li>Explore different contexts (digital vs in-library)</li>
                        <li>Interview both library-goers and librarians/library service providers to get various stakeholder perspectives</li>
                    </ul>
                    <div className="work-img row">
                        <img src={comp2} alt="participant walking next to misty robot" />
                    </div>
                    <p> We conducted tests with both experienced and new library website users to understand how they utilized or perceived the current systems. We would ask them to locate a specific book and walk us through the steps they would take to do so. </p>
                    <p>We then built a collaborative user journey map based on all of our research findings that highlighted the pain areas of frustration.</p>
                    <div className="work-img">
                        <img src={journeymap} alt="survey that was given to each participant" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> People find the lack of transparency around pick-up time frustrating </h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2>I usually search for the book online before heading to the library to get it. </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <h2> Prototyping &amp; Usability Testing </h2>
                    <p> We first built paper prototypes and simple wireframes and conducted think-aloud testing with users. As a researcher, I alternated between leading interview sessions and observing / note taking while looking for key themes among participants.</p>
                    <p> One key insight that emerged was that many people compared their experiences to those on e-commerce websites, even though the process of using the library is very different.</p>
                    <div className="work-img">
                        <img src={proto} alt="lo-fi prototype of application" />
                    </div>
                    <div className="work-img">
                        <img src={wireframe} alt="lo-fi prototype of application with comments and notes" />
                    </div>
                    <p>In initial prototype-testing sessions, users also missed the highlight placed on "closest available" or "first available" locations. I realized that we might need to reframe our solution to better enforce the option for users to select a different branch based on their proximity and how soon they could pick up the book.</p>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Calendars reinforce users' mental models of date-related options  </h2>
                    </div>
                    <div className="work-img">
                        <img src={zoom} alt="screenshot of zoom research session" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2>I might be okay to wait longer if I know I can get it within walking distance</h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> People are willing to wait for a library book, but need clear communication on timeline </h2>
                    </div>
                </div>
            </div>
            <div id="final-sol" className="row">
                <div className="solution">
                    <div className="title"> Findings </div>
                    <p className="solution"> People often compare library websites to e-commerce sites like Amazon and Barnes &amp; Noble, when in reality the experiences are very different. Through user research, I <b>pinpointed the need for
                        transparency </b>with users into the library process, especially possible wait times.</p>
                    <p className="solution">Through <b> evaluative research on initial prototypes</b>, I was able to more clearly communicate the relationship between pick-up time and the location of a library with users. I <b> used proven design patterns to reinforce users' mental models</b> but also differentiated the library from e-commerce by highlighting the local aspect and embracing users' ties to their neighborhood branches.</p>
                    <div className="work-img figma">
                        <img src={libgif} alt="gif of application interactive prototype" />
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