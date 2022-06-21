import './Honda.scss';
import demo from './Honda_person.png';
import meraki from './Meraki.JPG';
import joan from './joan.JPG';
import erin from './erin_misty.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGrinStars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

function Honda(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="honda-page">
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to all projects </p></NavLink>
            </div>
            <div className="row page-header">
                <div className="text">
                    <h1 className="page-title">
                        Honda
                    </h1>
                    <div className="overview"> Capstone project for Master's in Human-Computer Interaction </div>
                    <div className="date"> January 2021 - August 2022 </div>
                    <div className="summary"> I led research on a cross-functional team spanning six research methodologies, 70+ participants, and 300+ data points to understand
                        the future of autonomous public transportation.
                    </div>
                </div>
                <div>
                    <img src={demo} alt="logo" />
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> My Role </div>
                    <ul>
                        <li> Led <b>development of research protocols</b> and methodology direction. </li>
                        <li> Guided team in <b>collaborative analysis and synthesis</b> sessions following research activities.</li>
                        <li> Created shareable "archetype cards" as a <b> creative and memorable way to share out research findings</b> to stakeholders and internal team. </li>
                        <li> Built a <b>shared taxonomy</b> for tagging and quickly accessing research data, implemented Notably.ai and dscout platforms for remote testing and synthesis.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> Overview </div>
                    <p> I <b> conducted generative and evaluative research</b> to guide Honda in understanding user needs in future autonomous vehicles that are shared among ad-hoc passenger groups. </p>
                    <p> The insights from this research led to a <b> framework of design guidelines</b> to be followed when building systems in self-driving vehicles that Honda will utilize in their next generation of vehicles. </p>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Problem </div>
                    <p className="question"> What happens when there's <b>no human operator </b> in a <b>public vehicle</b>, such as a shuttle, Uber Pool, or Lyft Line that is shared with other passengers?</p>
                    <p className="question"> This is the question <b>Honda</b> tasked my team with answering. When a vehicle is <b>self-driving and shared</b> with other passengers, <b>what systems must be in place to ensure users' needs are met?</b></p>
                </div>
            </div>
            <div className="row">
                <div className="team">
                    <div className="title"> Collaborators </div>
                    <p className="members"> <b>Me (Research Lead) </b> </p>
                    <p className="members"> Honda 99P Labs Stakeholders</p>
                    <p className="members"> UX Designer </p>
                    <p className="members"> Visual Designer </p>
                    <p className="members"> Co-Research Lead </p>
                    <p className="members"> Product Designer </p>
                    {/*                     <div className="work-img">
                        <img src={yard} alt="logo" />
                    </div> */}
                </div>
            </div>
            <div className="row">
                <div className="work-img">
                    <img src={meraki} alt="group of students in a vehicle prototype" />
                    <img src={erin} alt="woman talks to a robot" />
                    <img src={joan} alt="two women brainstorm in front of a whiteboard" />
                </div>
            </div>

            <div id="final-sol" className="row">
                <div className="solution">
                    <div className="title"> Impact </div>
                    <p className="solution"> Client stakeholders plan to adopt key recommendations from research around user needs and attitudes in self-driving vehicles and public, shared transportation settings.  </p>
                    <p> One key finding around discretion has been especially embraced, with one stakeholder stating, <b> "Thank you for making me smarter today" </b>surrounding this finding. The team is currently working to design a solution that will emphasize key principles of what we discovered through generative research.</p>
                    <p> Learn more at <a target="_blank" href="https://mhci-x-honda.webflow.io/" rel="noreferrer">this website</a> I built to showcase the team's work!</p>
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

export default Honda;