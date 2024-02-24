import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Projetos() {
    return (
        <div className="container mt-5">
            <h3 className="text-center">Projetos pessoal</h3>
            <section className="container-box d-flex justify-content-center align-items-center flex-wrap justify-content-between">
                <div className="project">
                    <h5>Drsilva clima-temp</h5>
                    <p>
                        Esse projeto é um sistema web onde é possível consultar o clima atual
                        de uma determinada cidade. Ele é um projeto simples onde eu criei apenas
                        para consumir um api e exibir os dados para o usuário. Nele, eu usei as
                        seguintes tecnologias: <span>Html5, Css3, Bootstrap e Javascript</span>
                    </p>

                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="project">
                    <h5>Drsilva clima-temp</h5>
                    <p>
                        Esse projeto é um sistema web onde é possível consultar o clima atual
                        de uma determinada cidade. Ele é um projeto simples onde eu criei apenas
                        para consumir um api e exibir os dados para o usuário. Nele, eu usei as
                        seguintes tecnologias: <span>Html5, Css3, Bootstrap e Javascript</span>
                    </p>

                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="project">
                    <h5>Drsilva clima-temp</h5>
                    <p>
                        Esse projeto é um sistema web onde é possível consultar o clima atual
                        de uma determinada cidade. Ele é um projeto simples onde eu criei apenas
                        para consumir um api e exibir os dados para o usuário. Nele, eu usei as
                        seguintes tecnologias: <span>Html5, Css3, Bootstrap e Javascript</span>
                    </p>

                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

            </section>
        </div>
    )
};

export default Projetos;