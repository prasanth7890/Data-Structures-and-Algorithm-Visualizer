import React from 'react';
import './LeftBar.css';
import { Link } from 'react-router-dom';

function LeftBar() {
  return (
    <div className="leftbar">
      <Link to='/test2'>Visualizer</Link>
      <a href="#first">Dijkstra's Algorithm</a>
        <a href="#second">A* Algorithm</a>
        <a href="#third">Breadth First Search</a>
        <a href="#fourth">Depth First Search</a>  
    </div>
  );
}

export default LeftBar;