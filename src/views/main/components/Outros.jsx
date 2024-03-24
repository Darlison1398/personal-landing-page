import { useLayoutEffect } from "react";
import React from "react";
import { gsap } from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Outros() {

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect( () => {
        gsap.to(".ot", {
            y:0,
            opacity: 1, 
            scrollTrigger: {
                trigger: ".ot",
                //markers:true,
                start: "top 600px",
                end: "bottom 350px",
                scrub: true,
            }
        })
        
        return () => {
            gsap.killTweensOf(".ot")
        }
    }, []);

    return (
        <div className="container mt-5 ot">
            <h3 className="text-center">Outras Stacks</h3>
            <div className="container mt-2">
                <div className="row">

                    <div className="col-sm-4">
                        <h3>Testes de Software</h3>
                        <p>
                            Ao concluir o desenvolvimento de cada sistema, realizo testes abrangentes em diversas formas. No contexto do 
                            desenvolvimento de uma API, examino minuciosamente seus endpoints e cada funcionalidade dos serviços que ela 
                            oferece. Em aplicações front-end, testo os componentes, avalio a responsividade e verifico a 
                            entrada e saída de dados.
                        </p>
                    </div>


                    <div className="col-sm-4">
                        <h3>APIs RESTFull</h3>
                        <p>
                            Possuo expertise no desenvolvimento de APIs RESTful, utilizando tecnologias como Java, Spring Boot, PHP, 
                            PostgreSQL e MySQL. Tenho experiência na concepção de aplicações CRUD, na implementação de sistemas de 
                            token e na integração dessas APIs com a aplicação front-end.                            
                        </p>
                    </div>

                    <div className="col-sm-4">
                        <h3>Insomnia</h3>
                        <p>
                            Emprego esse sistema para testar APIs e microsserviços, realizando uma análise abrangente de cada requisição 
                            essencial para assegurar o funcionamento eficiente da aplicação. Testo operações como GET, POST, PUT e DELETE, 
                            garantindo uma cobertura completa nos testes.
                        </p>
                    </div>

                </div> 
            </div>

        </div>
    )
    
};

export default Outros;