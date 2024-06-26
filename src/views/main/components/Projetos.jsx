import { useLayoutEffect } from "react";
import React from "react";
import { gsap } from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import project from '../../../assets/js/Project';

function Projetos() {

    const redirectToProject = (url) => {
        window.open(url, '_blank'); 
    };


    
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect( () => {
        gsap.to(".project", {
            x:0,
            opacity: 1, 
            scrollTrigger: {
                trigger: ".project",
                //markers:true,
                start: "top 400px",
                end: "botton 200px",
                scrub: true,
            }
        })
        
        return () => {
            gsap.killTweensOf(".project")
        }
    }, []);


    return (
        <div className="container mt-5">
            <h3 className="text-center">Projetos pessoal</h3>
            <section className="container-box d-flex justify-content-center align-items-center flex-wrap justify-content-between">
                <div className="project">
                    <h5>Drsilva clima-temp</h5>
                    <p>
                        Esse projeto é um sistema web onde é possível consultar o clima atual
                        de uma determinada cidade.
                    </p>

                    <button id="btn-see" onClick={() => redirectToProject(project.clima_temp)}>
                        Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> 
                    </button>
                </div>

                <div className="project">
                    <h5>Drsilva curriculu-web</h5>
                    <p>Currículu profissional em formato web. 
                        Ele tem um caráter mais voltado a mostrar meu lado profissional.
                    </p>
                    <button id="btn-see" onClick={() => redirectToProject(project.curriculu_web)}>
                        Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> 
                    </button>
                </div>

                <div className="project">
                    <h5>Drsilva Start</h5>
                    <p>
                        Um simples site desenvolvido em Wordpress. Aqui, o foco principal  
                        visa mostrar a minha habilidade com a escrita.
                    </p>
                    <button id="btn-see" onClick={() => redirectToProject(project.start)}>
                        Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> 
                    </button>
                </div>

                <div className="project">
                    <h5>Drsilva Estudos</h5>
                    <p>
                        Página front-end desenvolvida apenas para fins de estudos. Nela, eu faço o 
                        consumo de uma API RESTFUll.
                    </p>
                    <button id="btn-see" onClick={() => redirectToProject(project.learn)}>
                        Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> 
                    </button>
                </div>

            </section>
        </div>
    )
};

export default Projetos;