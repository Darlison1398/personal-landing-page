import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalG({ show, handleClose }) {
  return (
    <div
      className="modal show"
      style={{ display: show ? 'block' : 'none', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Sobre esse projeto</h3></Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p>
            Este modesto projeto integra-se ao meu portfólio pessoal, 
            servindo como um reflexo das minhas habilidades no desenvolvimento
            de sistemas web com o framework React.js. Ao elaborar esta 
            aplicação, utilizei um conjunto de tecnologias, incluindo 
            React.js, Bootstrap, CSS, JavaScript, Font Awsome e Gsap, 
            visando demonstrar a minha proficiência na criação de interfaces 
            dinâmicas e responsivas. Este projeto não apenas ilustra minha 
            competência técnica, mas também destaca meu compromisso em utilizar 
            ferramentas modernas para proporcionar experiências web eficientes 
            e atraentes.
          </p>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          {/*<Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>*/}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalG;