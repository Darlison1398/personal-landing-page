import React from "react";

import BdImg from '../../../assets/icon/servidor.png';
import figImg from '../../../assets/icon/figma.png';
import phpImg from '../../../assets/icon/php.png';
import pyImg from '../../../assets/icon/pitao.png';

function Mais () {
    const mt = { marginTop: '5em'};

    return (
        <div className="container usuals" style={mt}>
            <h3 className="text-center">Tecnologias que eu já trabalhei em alguns momentos.</h3>
            <ul className="cards">
              <li className="card cards__item">
                <div className="card__frame">
                  <h2 className="card__title">Python</h2>
                  <img src={pyImg} alt="" style={{width: '40px', height: '40px'}}/>
                </div>
                <div className="card__overlay"></div>
                <div className="card__content">
                  <h2>Python</h2>
                  <p>  
                      Meus estudos em programação se iniciaram na linguagem python, onde tive uma boa base 
                      de lógica de programação nessa tecnologia fantástica.
                   </p>
                </div>
              </li>

              <li className="card cards__item">
                <div className="card__frame">
                  <h2 className="card__title">Php</h2>
                  <img src={phpImg} alt="" style={{width: '40px', height: '40px'}} />
                </div>
                <div className="card__overlay"></div>
                <div className="card__content">
                  <h2>Php</h2>
                  <p>
                    Ampla utilização da tecnologia PHP na empresa onde trabalho desde 2023. Adquiri experiência 
                    com os frameworks CodeIgniter e Laravel.
                  </p>
                </div>
              </li>

              <li className="card cards__item">
                <div className="card__frame">
                  <h2 className="card__title">Figma</h2>
                  <img src={figImg} alt="" style={{width: '40px', height: '40px'}}/>
                </div>
                <div className="card__overlay"></div>
                <div className="card__content">
                  <h2>Figma</h2>
                  <p>
                    Uso essa tecnologia até hoje para criar protótipos, designer e wireframes dos sites 
                    e sistemas que eu desenvolvo.
                  </p>
                </div>
              </li>


              <li class="card cards__item">
                <div className="card__frame">
                  <h2 className="card__title">MongoDB</h2>
                  <img src={BdImg} alt="" style={{width: '45px', height: '45px'}} />
                </div>
                <div className="card__overlay"></div>
                <div className="card__content">
                  <h2>MongoDB</h2>
                  <p>
                    Usei essa tecnologia em projetos da faculdade. Na época, foi apenas para questão de estudos,
                    mas obtive uma boa base nela. Futuramente, pretendo me aprofundar um pouco mais nela.
                  </p>
                </div>
              </li>

            </ul>
        </div>
    );
};

export default Mais;