import './Ucre.scss';
import graphic from '../graphic.png';
import thinkaloud from '../Think_Aloud.png';
import chat from '../chat.jpg';
import bias from '../bias.png';
import zoom from '../zoom.svg';
import wallwalk from '../wallwalk.JPG';
import ucre from '../miro.jpg';
import twitter2 from '../twitter_data_2.png';
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
                    <div className="title"> My Role </div>
                    <ul>
                        <li><b>Drove insights  </b>on how to harness the power of every day users to audit algorithmic bias </li>
                        <li> <b>Led interviews </b> via directed storytelling, think-aloud testing, and generative + evaluative ideation with speed dating</li>
                        <li> Analyzed Twitter dataset using <b> Python, Pandas, Seaborn, and Matplotlib </b> </li>
                        <li> <b> Presented recommendations</b> to stakeholders and faculty </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> Overview </div>
                    <p> People on social media are often harmed by algorithmic biases. This can lead to feelings of <b> isolation and frustration </b> with their own identities, other people, and the platforms they use. When there is a <b> lack of feedback </b>from the platform on what they're doing to solve these issues, <b>users become discouraged and do not try to create change. </b> </p>
                    <p> Our team used <b>generative and evaluative research </b>to understand group dynamics and motivation. We <b> interviewed leaders of groups and community activists </b>and applied our findings to the concept of every day users auditing algorithmic bias. We then created a <b>framework of guidelines for social media </b> sites to implement to better pinpoint and root out these harmful biases on their platforms. </p>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Problem </div>
                    <p className="question"> Algorithmic bias is a pervasive problem in many technologies utilizing AI and Machine Learning. This can be very harmful to end users of social media platforms, but developers and teams often have trouble pinpointing and rapidly addressing these issues which can lead to detrimental effects on end users and distrust of the platform. Our question we sought to answer was whether we could <b>utilize the power of every day social media users to more quickly identify and remove instances of algorithmic bias. </b> </p>
                </div>
            </div>
            <div className="row">
                <div className="team">
                    <div className="title"> Collaborators </div>
                    <p className="members"> Pradeep Vegireddi, Gabriel Alvarez, Harvey Zheng</p>
                    <div className="work-img">
                        <img src={wallwalk} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="methods">
                    <div className="title"> Methods </div>
                    <h2> Quantitative Analysis </h2>
                    <p> Analyzed Twitter data set with over 2000 records to analyze three incidents of algorithmic bias on the platform and users engagement and reactions. This involved data wrangling, generating key concepts to filter by, using Python and other tools to run queries on it, and qualitatively analyzing and discussing our findings after.</p>
                    <div className="work-img">
                        <img src={twitter2} alt="dataset in excel" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Users were most engaged for 4-6 weeks after an incident occurred, then participation dropped off rapidly. </h2>
                    </div>
                    <h2> Think-Aloud Testing</h2>
                    <p> I conducted a think-aloud testing session to talk through a person's experiences in online community forums, such as Reddit.</p>
                    <p> It was crucial I made sure the participant was comfortable and knew there were no right or wrong answers, and that they could stop at any time. </p>
                    <p> Our team learned a lot from this interview about how moderation plays into chat boards such as Reddit, how this user seeks out information related to his own interests, and what drives him to participate or take action on a problematic post or instance if he sees one. </p>
                    <div className="work-img">
                        <img src={thinkaloud} alt="zoom recording of a think-aloud testing session" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Personal connection mattered - users were less likely to engage with content or discussion if they did not have a personal stake or interest in it. </h2>
                    </div>
                    <h2> Contextual Inquiry </h2>
                    <p> I interviewed a community activist and group organizer on her experiences both leading and being a member of groups via the <b> Directed Storytelling</b> method. </p>
                    <p> From our conversation, we derived knowledge on how important de-centralized leadership can be to a group, and how <b>tolerance must be widely practiced </b> for people to feel comfortable sharing their thoughts and opinions in a group setting. </p>
                    <p> This interviewee also was excited about tackling algorithmic bias from the perspective of <b>bringing joy and community</b>  to people who have experienced it, versus only trying to solve the problem as a whole. This started our team's exploration of how in addition to encouraging reporting of online biases, we could also provide a support system or sense of community for people feeling isolated by bias.</p>
                    <div className="work-img">
                        <img src={ucre} alt="logo" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> I do feel a responsiblity to give feedback after using the feedback others give so often. </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> People need clear signs of progress to continue engaging in activism or other collective work.  </h2>
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> Seeing at-home, local impact is much more motivating </h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <h2> Generative &amp; Evaluative Research via Speed Dating </h2>
                    <p> Our final research method combined both evaluative and generative research as we storyboarded 12 concepts to quickly "speed date" with participants. </p>
                    <p> We walked through each solution each at varying "risk levels" from online rewards systems for reporting bias all the way to a group of organizers actually showing up at your house to get you involved in their movement (this one was expectedly unpopular). </p>
                    <p> We sythesized all our findings as a team and debriefed participants reactions and feedback on our storyboards in order to pinpoint the solutions that met and addressed users' core needs. This led us to identify two key needs of community support and signs of progress both personally and from the platform itself. </p>
                    <div className="work-img">
                        <img src={zoom} alt="screenshot of zoom storyboarding research session" />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <h2> I want to feel comfortable and feel like my voice matters</h2>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className="insight">
                        <FontAwesomeIcon icon={faGrinStars} />
                        <h2> Community members need to feel welcomed and like their voices and unique perspectives are being heard.</h2>
                    </div>
                </div>
            </div>
            <div id="final-sol" className="row">
                <div className="solution">
                    <div className="title"> The Solution </div>
                    <p className="solution"> Motivating users to report and call out bias by providing <b> clear feedback and tracking </b> along with spaces for anonymous <b> community support and personal connection. </b> </p>
                    <div className="work-img">
                        <img src={bias} alt="tracking board for bias reports and status on website" />
                        <img src={chat} alt="community chat board diagram" />
                    </div>
                </div>
            </div>
            <div className="row">
                <NavLink to='/work'> <p className="back-section"> <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to All Projects </p></NavLink>
            </div>
        </div >
    );
}

export default Ucre;