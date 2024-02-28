import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import socialMediaLinks from '../../assets/js/socialMediaLinks ';

function Footer() {
    return (
        <div className="header">
            <div className="container footer">
                            
                <div className="text-center mt-3">
                    <h5 className="text-center">Minhas principais redes de contatos</h5>
                    <div className="text-center box-icon-footer">
                        <a href={socialMediaLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className="redes-icon"  />
                        </a>
                        
                        <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="redes-icon"  />
                        </a>
                        <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="redes-icon" />
                        </a>
                        <a href={socialMediaLinks.instagran} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="redes-icon" />
                        </a>
                    </div>
                </div>




                <p className="text-center">
                    &copy;Darlison Silva
                </p>
            </div>
        </div>
    )
}

export default Footer;