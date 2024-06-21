import Ft from '../../../assets/img/eu.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import socialMediaLinks from '../../../assets/js/socialMediaLinks ';

function Photo() {

    const ft = {
        maxWidth: '100%',
        maxHeight: '530px',
        objectFit: 'cover',
        borderRadius: '10px'
    }

    return (
        <div className="container">
            <div className="container-photo mt-2">
                 <div className="container-box1">                     
                    <figure class="image-block ml-auto" >
                    	<img src={Ft} alt="Darlison Silva" style={ft} />
                    	<figcaption>
                            <p>
                                Darlison Silva, 25 anos, natural de Itaituba - PA, residente em Tubarão - SC.
                            </p>
                    	</figcaption>
                    </figure>

                 </div>
     
                 <div className="box-icons">
                     <div className="redes d-flex justify-content-between">
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
            
            </div>
        </div>
    )
}

export default Photo;