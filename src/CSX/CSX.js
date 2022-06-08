import './CSX.scss';
import demo from './demo.JPG';
import demo2 from './demo2.jpg';
import csx from '../csx.png';
import yard from './yard.JPG';
import group from './group.JPG';
import wallmount from './wallmount.JPG';
import phone from './phone.JPG';
import pals from './pals.JPG';
import whiteboard from './whiteboard2.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGrinStars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

function CSX(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="csx-page">
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to all projects </p></NavLink>
            </div>
            <div className="row page-header">
                <div className="text">
                    <h1 className="page-title">
                        Car Repair Everywhere
                    </h1>
                    <div className="overview"> Research project at CSX Technology</div>
                    <div className="date"> January 2019 - January 2020 </div>
                    <div className="summary"> I conducted formative research and wrote front-end code for the rewrite of a legacy
                        web application that led to cost savings and an improved user experience for rail workers.
                    </div>
                </div>
                <div>
                    <img src={csx} alt="logo" />
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> My Role </div>
                    <ul>
                        <li><b>Led contextual inquiries </b> in rail yards throughout the southeast region</li>
                        <li> <b>Conducted interviews </b> and think-aloud sessions for <b>usability testing </b></li>
                        <li> <b>Designed survey </b> and analyzed results to better understand railroad repair workers</li>
                        <li> <b> Increased efficiency </b> of design and development process and led to a <b> more thorough billing process</b> for repairs. </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> Overview </div>
                    <p> I <b> conducted generative and evaluative research</b> throughout the rewrite of a legacy application for train car repairs.</p>
                    <p> The insights from this research led to more clarity on requirements that streamlined the development process and led to code being dynamic instead of hard-coded, which <b>increased efficiency and scalability.</b> </p>
                    <p> We also implemented offline storage and a tablet version of the application for "line-of-road" workers conducting repairs in remote areas that <b>led to more accurate reporting and billing.</b></p>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Problem </div>
                    <p className="question"> This software was built in the 90s and was deployed onto desktops inside wear-resistant cases bolted to the ground in order to withstand the elements of being in a rail-car repair shop. </p>
                    <p> The application frequently faced <b>connectivity issues </b> and caused problems for "line of road" repair teams that had to do on-the-fly repairs when trains had issues while in operation in more remote areas. This led to repair workers filling out paper sheets that were easily lost or damaged and led to <b> less accurate repair reporting and billing.</b></p>
                </div>
            </div>
            <div className="row">
                <div className="team">
                    <div className="title"> Collaborators </div>
                    <p className="members"> CSX UX &amp; Mobility Team, Mechanical Car Team </p>
                    <div className="work-img">
                        <img src={yard} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="methods">
                    <div className="title"> Methods </div>
                    <h2> Ethnographic Field Study </h2>
                    <p> Spent the day in three rail yard locations for 5+ days in order to observe repair process and tracking with current application. </p>
                    <p> Conducted semi-structured interviews in a contextual inquiry format while workers were conducting repairs and working in the shop office to log billing information. </p>
                    <p> Met with lead repair workers who mostly utilize the desktop in-shop version of the application, and with line-of-road workers to understand both desktop and mobile variations of user needs.</p>
                    <div className="work-img">
                        <img src={group} alt="group of rail workers" />
                    </div>
                    <p> We investigated utilizing tablets for the line-of-road repair application, leading to the name "Car Repair Everywhere". </p>
                    <div className="work-img">
                        <img src={wallmount} alt="wall mounted tablets" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Offline capabilities and portability is key to increasing repair tracking capabilities  </h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> Not every shop that wants [this application] currently can have it because we have to hard code each map </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="work-img">
                        <img src={demo} alt="demo of legacy application for rail workers" />
                    </div>
                    <h2> Survey </h2>
                    <p> Created a survey alongside project UX designer to better understand current pain points and important uses of application.</p>
                    <p> Analyzed qualitative and quantitative results in order to direct further research and development plan.</p>
                    <div className="work-img">
                        <img src={phone} alt="screenshot of zoom storyboarding research session" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> While a map view of the shop is a "nice-to-have", the order of cars is what most of the repair tracking job relies on</h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> I count cars to see where the one I need to repair is in the yard</h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <h2> Usability Testing </h2>
                    <p> Built a prototype of the mobile application in Angular and Cordova and deployed it to Android tablets for testing in the field.</p>
                    <p> Conducted think-aloud testing with repair workers as they walked through the app to identify areas for improvement and further development.</p>
                    <div className="work-img">
                        <img src={pals} alt="csx workers showing one of our applications" />
                    </div>
                    <div className="work-img">
                        <img src={whiteboard} alt="whiteboarding with a coworker" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2>Sometimes I start logging my repair while I'm on the road and finish it back on the shop computer</h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Repair workers want offline capability with the option to complete repairs on a desktop when they get back to the shop </h2>
                    </div>
                </div>
            </div>
            <div id="final-sol" className="row">
                <div className="solution">
                    <div className="title"> Findings </div>
                    <p className="solution"> <b> Offline capability is a must</b> as repairs are often done in remote places with little to no connectivity. </p>
                    <p className="solution"> Solution must be <b> scalable to over 200 repair shops</b> with different layouts. We learned that the exact yard layout and mapping does not matter as much as a <b>visual representation of car order along rail lines </b>, which helped allow code to be dynamically written. </p>
                    <div className="work-img">
                    </div>
                </div>
            </div>
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
        </div >
    );
}

export default CSX;