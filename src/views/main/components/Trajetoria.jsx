import Mais from "./Mais";

function Trajetoria() {

    return (
        <div className="container mt-4">

            <div className="box-start">
                <h3 className="text-center">Início</h3>
                <div className="container mt-1 box-cont-text">
                    <p>
                        Ingressei no mundo da programação em novembro de 2021, quando dei os 
                        primeiros passos no estudo da lógica de programação utilizando a linguagem 
                        Python por meio de um curso que adquiri em uma plataforma de ensino. 
                        Em fevereiro de 2022, dei continuidade à minha formação ingressando no curso 
                        de graduação em Análise e Desenvolvimento de Sistemas no Instituto Federal de 
                        Santa Catarina, onde estou atualmente e com previsão de se formar em Dezembro de 2024.
                    </p>
                </div>
            </div>

            <div className="box-progress">
                <h3 className="text-center">Em progresso...</h3>
                <div className="container mt-1 box-cont-text">
                    <p>
                       Atualmente, atuo como Programador de Sistemas em uma empresa de Automação Industrial, 
                        combinando minhas responsabilidades profissionais com uma busca constante por 
                        conhecimento. Além dos estudos acadêmicos no curso superior, dedico-me a realizar 
                        cursos adicionais nas horas vagas e a empreender projetos pessoais afim de melhorar
                        minhas habilidades como profissional na área.

                        Minha dedicação pelo desenvolvimento se estende tanto ao front-end quanto ao back-end. 
                        Ao criar interfaces, busco a simplicidade, a intuição e a responsividade como pilares 
                        essenciais. Já no desenvolvimento back-end, priorizo a construção de aplicações com 
                        uma sólida estrutura de código. Meu objetivo é oferecer soluções compreensíveis para 
                        outros programadores e usuários, promovendo a reutilização do código e mantendo um 
                        padrão de limpeza.
                        
                    </p>
                </div>
            </div>
            <div className="box-progress">
                <h3 className="text-center">Objetivos</h3>
                <div className="container box-cont-text">
                    <p>
                       Tenho como objetivo se tornar um Desenvolvedor Full Stack altamente profissional e qualificado. 
                       Para atingir essa meta, estou estudando uma série de tecnologias que naturalmente compõem
                       o currículu de um profissional atuante da área. Assim que terminar o curso de graduação, pretendendo 
                       ingressar em um curso de pós-graduação na área de Engenharia de software, ou realizar cursos de 
                       certificação profissional.
                        
                    </p>
                </div>
            </div>
            <div className="box-progress">
                <h3 className="text-center">Interesses profissionais</h3>
                <div className="container box-cont-text">
                    <p>
                       Interesses profisisonais: Desenvolvimento web de modo geral, front-end, 
                       back-end, inteligência artificial, programação orientada a objetos, banco 
                       de dados, testes de sistemas, ux e ui design, desenvolvimento mobile,
                       análise de sistemas, etc.
                    </p>
                </div>
            </div>

            <Mais />
        </div>
    )
}

export default Trajetoria;