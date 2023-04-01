import React from 'react';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftbar">
      <a href="#visualize" className='button'>Visualize</a>
        <a id="f" href="#first">What is Array?</a>
        <a href="#second">Key Concepts</a>
        <a href="#third">Operations</a>
        <a href="#fourth">Advantages</a>
        <a href="#fifth">Disadvantages</a>
        <a href="#sixth">Time Complexity</a>
    </div>
  );
}

export default LeftBar;