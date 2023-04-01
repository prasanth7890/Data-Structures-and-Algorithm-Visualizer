import React from 'react';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftbar">
        <a href="#visualize" className="button">Visualize</a>
        -------------------------------
        <a href="#first">What is Linked List?</a>
        <a href="#second">Key Concepts</a>
        <a href="#third">Operations</a>
        <a href="#fourth">Drawbacks of sequential data structures</a>
        <a href="#fifth">Merits of linked data structures</a>
        <a href="#sixth">Time Complexity</a>
        <a href="#seventh">Singly Linked Lists</a>
    </div>
  );
}

export default LeftBar;