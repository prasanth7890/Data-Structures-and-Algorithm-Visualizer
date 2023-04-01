import React from 'react';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftbar">
        <a href="#top" className="button">Visualize</a>
        <a href="#first">What is Stack?</a>
        <a href="#second">Key Concepts</a>
        <a href="#third">Implementation</a>
       
    </div>
  );
}

export default LeftBar;