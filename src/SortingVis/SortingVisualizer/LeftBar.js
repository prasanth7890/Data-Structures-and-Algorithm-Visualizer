import React from 'react';
import './LeftBar.css';
import { Link } from 'react-router-dom';


function LeftBar() {
  return (
    <div className="leftbar">
        <Link to="/test">Visualizer</Link>
        <a href="#first">Merge Sort</a>
        <a href="#second">Insertion Sort</a>
        <a href="#third">Quick Sort</a>
        <a href="#fourth">Bubble Sort</a>
        <a href="#fifth">Comparision</a>
    </div>
  );
}

export default LeftBar;