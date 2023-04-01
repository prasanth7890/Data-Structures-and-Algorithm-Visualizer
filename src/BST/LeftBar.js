import React from 'react';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftbar">
        <a href="#visualize" className="button">Visualize</a>
        -------------------------------
        <a href="#first">Definition</a>
        <a href="#second">Key Concepts</a>
        <a href="#third">Operations</a>
        <a href="#fourth">Advantages</a>
        <a href="#fifth">Disadvantages</a>
    </div>
  );
}

export default LeftBar;