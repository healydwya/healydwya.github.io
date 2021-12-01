import './Ucre.scss';
import backpack from './backpack.PNG';

function Ucre(props) {
    return (
        <div className="ucre-page">
            <p> Back to All Projects </p>
            <h1 className="title">
                Algorithmic Activism
            </h1>
            <div className="work-img">
                <img src={backpack} alt="logo" />
            </div>
            <div className="row">
                <div className="summary">
                    <div className="title"> Overview: </div>
                    <p> Worked as a UX Researcher to understand how to harness the power of every day users to audit algorithmic bias. </p>
                </div>
            </div>
            <div className="row">
                <div className="problem">
                    <div className="title"> The Question: </div>
                    <p className="question"> How might we help social media users to collectively fight algorithmic bias? </p>
                </div>
                <div className="solution">
                    <div className="title"> The Solution: </div>
                    <p className="question"> asdfasdfasdf </p>

                </div>
            </div>
            <div className="methods"></div>
            <div className="evidence"></div>
            <div className="insights"></div>
            <div className="team">
                <div className="title"> Team: </div>
                <div className="members">
                    <p className="bold"> Healy Dwyer </p>
                    <p> Pradeep Vegireddi</p>
                    <p> Gabriel Alvarez </p>
                    <p> Harvey Zheng </p>
                </div>
            </div>
        </div>
    );
}

export default Ucre;