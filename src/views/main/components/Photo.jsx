import Ft from '../../../assets/img/eu.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Photo() {

    const ft = {
        maxWidth: '100%',
        maxHeight: '500px',
        objectFit: 'cover'
    }

    return (
        <div className="container">
            <div className="container-photo mt-2">
                 <div className="container-box1">
                     <img src={Ft} alt="eu" style={ft}/>
                 </div>
     
                 <div className="box-icons">
                     <div className="redes d-flex justify-content-between">
                         <FontAwesomeIcon icon={faWhatsapp} className="redes-icon"  />
                         <FontAwesomeIcon icon={faLinkedin} className="redes-icon"  />
                         <FontAwesomeIcon icon={faGithub} className="redes-icon" />
                         <FontAwesomeIcon icon={faInstagram} className="redes-icon" />
                     </div>
                 </div>
            
            </div>
        </div>
    )
}

export default Photo;