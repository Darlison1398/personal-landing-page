import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function UpsHab() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prevVisible) => !prevVisible);
        }, 1000);

        return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    }, []);

    const cl = {
        color: '#ef4fbf'
    }

    return (
        <div className="container mt-3">
            <h3 className="text-center" style={{ visibility: visible ? 'visible' : 'hidden', ...cl }}>
                <FontAwesomeIcon icon={faRocket} /> Minhas Skills
            </h3>
        </div>
    );
}

export default UpsHab;
