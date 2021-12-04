import './Ucre.scss';
import graphic from './graphic.png';
import bias from './bias.png';
import zoom from './zoom.svg';
import wallwalk from './wallwalk.JPG';
import affinity from './affinity.png';
import twitter from './twitter_data.png';
import twitter2 from './twitter_data_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGrinStars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

function Ucre(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="ucre-page">
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
            <h1 className="title">
                Algorithmic Activism
            </h1>
            <div className="work-img">
                <img src={graphic} alt="logo" />
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> My Role: </div>
                    <ul>
                        <li>Drove insights on how to harness the power of every day users to audit algorithmic bias. </li>
                        <li> Conducted interviews via directed storytelling, think-aloud testing, and generative + evaluative ideation with speed dating.</li>
                        <li> Analyzed Twitter dataset using Python, Pandas, Seaborn, and Matplotlib. </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Problem: </div>
                    <p className="question"> Algorithmic bias is a pervasive problem in many technologies utilizing AI and Machine Learning. This can be very harmful to end users of social media platforms, but developers and teams often have trouble pinpointing and rapidly addressing these issues which can lead to detrimental effects on end users and distrust of the platform. </p>
                </div>
            </div>
            <div className="row">
                <div className="solution">
                    <div className="title"> The Solution: </div>
                    <p className="solution"> Motivating users to report and call out bias by providing <b> clear feedback and tracking </b> along with spaces for anonymous <b> community support and personal connection. </b> </p>

                </div>
            </div>
            <div className="row">
                <div className="methods">
                    <div className="title"> Methods: </div>
                    <h2> Quantitative Analysis </h2>
                    <p> Analyzed Twitter data set with over 2000 records to analyze three incidents of algorithmic bias on the platform and users engagement and reactions. </p>
                    <img src={twitter} alt="logo" />
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Users were most engaged for 4-6 weeks after an incident occurred, then participation dropped off rapidly. </h2>
                    </div>
                    <img src={twitter2} alt="logo" />
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Personal connection mattered - users were less likely to engage with content or discussion if they did not have a personal stake or interest in it. </h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> Seeing at-home, local impact is much more motivating </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <img src={wallwalk} alt="logo" />
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> People need clear signs of progress to continue engaging in activism or other collective work.  </h2>
                    </div>
                    <img src={zoom} alt="screenshot of zoom storyboarding research session" />
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> I want to feel comfortable and feel like my voice matters</h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Community members need to feel welcomed and like their voices and unique perspectives are being heard.</h2>
                    </div>
                    <img src={affinity} alt="logo" />
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> I do feel a responsiblity to give feedback after using the feedback others give so often. </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <img src={bias} alt="screenshot of zoom storyboarding research session" />
                </div>
            </div>
            <div className="evidence"></div>
            <div className="insights"></div>
            {/*  <div className="team">
                <div className="title"> Team: </div>
                <div className="members">
                    <p className="bold"> Healy Dwyer </p>
                    <p> Pradeep Vegireddi</p>
                    <p> Gabriel Alvarez </p>
                    <p> Harvey Zheng </p>
                </div>
            </div> */}
        </div>
    );
}

export default Ucre;