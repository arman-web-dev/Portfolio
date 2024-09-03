import React, { useRef, useEffect } from 'react';
import './progress.css';

const Progressbar = ({ value, label, description }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${value}%`;
    }
  }, [value]);

  return (
    <div className="skill">
      <h6>
        {label} <span>{value}%</span>
      </h6>
      <div className="skills-progress">
        <span ref={progressRef} />
      </div>
    </div>
  );
};

export default Progressbar;
