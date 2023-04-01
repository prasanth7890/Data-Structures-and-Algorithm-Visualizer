import React from 'react';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftbar">
      <a href="#visualize">Visualizer</a>
        <a href="#first">Introduction</a>
        <a href="#second">Recursive Algorithm</a>
        <a href="#third">Iterative Algorithm</a>
        <a href="#fourth">Efficiency</a>
        <a href="#fifth">Properties</a>
        <a href="#sixth">Applications</a>
    </div>
  );
}

export default LeftBar;