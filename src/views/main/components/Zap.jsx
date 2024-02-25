//import { useLayoutEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Zap() {

    const handleWhatsappClick = () => {
        const whatsappUrl = "https://wa.me/5511954201792?text=Olá, Darlison Silva. Achei seu número no seu site e resolvi entrar em contato. Podemos conversar?";
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="container mt-5 text-center mb-3">
            <div className="animation"> 
                <h4>E ai, vamos conversar?</h4>
                <button className="btn-zap" onClick={handleWhatsappClick}>
                    Me chame no whatsapp&nbsp; <FontAwesomeIcon icon={faWhatsapp} id="icon-zap"/> 
                </button>
            </div>
        </div>

    );
};

export default Zap;