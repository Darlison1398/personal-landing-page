import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HardSkills() {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredElement(index);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

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
              {hoveredElement === index && <FontAwesomeIcon icon={faChevronRight} />} {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
