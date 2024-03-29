import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';

function Footer(props) {
    return (
        <div className="col">
            <div className="find-me-sec">
                <div className="icons">
                    <a href="http://github.com/healydwya" rel="noreferrer" target="_blank"><FaGithub></FaGithub></a>
                    <a href="mailto:healydwyer@gmail.com" rel="noreferrer" target="_blank"><MdEmail></MdEmail></a>
                    <a href="http://linkedin.com/in/healydwyer" rel="noreferrer" target="_blank"><SiLinkedin></SiLinkedin></a>
                </div>
            </div>
            <div className="copyright">
                <p> &copy; 2021, made with React &amp; <FontAwesomeIcon icon={faHeart} /> by <a href="http://github.com/healydwya/healydwya.github.io" target="_blank" rel="noreferrer"> Healy Dwyer</a> </p>
            </div>
        </div>
    );
}

export default Footer;