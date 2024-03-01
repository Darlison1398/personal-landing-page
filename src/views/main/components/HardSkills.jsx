import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HardSkills() {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredElement(index);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowIcon(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama a função para verificar o tamanho inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // O segundo argumento do useEffect vazio faz com que o efeito seja executado apenas uma vez no montar do componente

  const elements = ['Adaptativo', 'Comunicativo', 'Informática', 'Organizado', 'Inglês'];

  return (
    <div className="container mt-5">
      <div className="box-soft">
        <h4>Hard-skills</h4>
        <div className="box-elements">
          {elements.map((element, index) => (
            <div
              key={index}
              className={`element-h ${hoveredElement === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {(hoveredElement === index || showIcon) && <FontAwesomeIcon icon={faChevronRight} />} {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
