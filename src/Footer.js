import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';
import hiker from "./hiker.PNG";
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';

function Footer(props) {
    return (
        <div>
            <div className="find-me-sec">
                <h1> Find Me Here </h1>
                <div className="icons">
                    <a href="http://github.com/healydwya" rel="noreferrer" target="_blank"><FaGithub></FaGithub></a>
                    <a href="mailto:healydwyer@gmail.com" rel="noreferrer" target="_blank"><MdEmail></MdEmail></a>
                    <a href="http://linkedin.com/in/healydwyer" rel="noreferrer" target="_blank"><SiLinkedin></SiLinkedin></a>
                </div>
            </div>
            <div className="copyright">
                <img src={hiker} className="App-logo" alt="logo" />
                <p> &copy; 2021, made with <FontAwesomeIcon icon={faHeart} /> by <a href="http://github.com/healydwya/healydwya.github.io" target="_blank" rel="noreferrer"> Healy Dwyer</a> </p>
            </div>
        </div>
    );
  }

export default Footer;