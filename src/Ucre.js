import backpack from './backpack.PNG';
import misty from './misty.png';
import library from './library.png';
import './Ucre.scss';
import Link from 'react-router-dom';

function Ucre(props) {
    return (
        <div className="ucre-page">
            <h1 className="title">
                Algorithmic Activism
            </h1>
            <div className="team"></div>
            <div className="summary"></div>
            <div className="problem"></div>
            <div className="methods"></div>
            <div className="evidence"></div>
            <div className="insights"></div>
            <div className="solution"></div>
        </div>
    );
}

export default Ucre;