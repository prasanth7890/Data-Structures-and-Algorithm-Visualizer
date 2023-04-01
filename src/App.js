import './App.css';
import './test.css';
import './HomePage/Homepage.css'
import Arrays from './Arrays/Arrays';
import Stack from './Stacks/Stack';
import Queue from './Queues/Queue';
import Linkedlist from './LinkedList/Linkedlist';
import VisualizerSorting from './SortingVis/SortingVisualizer/VisualizerSorting';
import VisualizePathfinding from './PathFindindingVis/PathfindingVisualizer/Node/VisualizePathfinding';

import Factorial from './Factorial/Factorial';
import Homepage from './HomePage/Homepage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PathfindingVisualizer from './PathFindindingVis/PathfindingVisualizer/Node/PathfindingVisualizer';
import SortingVisualizer from './SortingVis/SortingVisualizer/SortingVisualizer';
import BST from './BST/BST';
import NavigationBar from './NavBar/NavigationBar';
import LinkedList from './LinkedList/Linkedlist';
      //TODO- NQueens
function App() {
  
  return (
    <div>
      <BrowserRouter basename='/'> 
        <Routes>
          <Route path="/stack" element={<Stack></Stack>} />
          <Route path="/queue" element={<Queue></Queue>} />
          <Route path="/linkedlist" element={<Linkedlist></Linkedlist>} />
          <Route path="/arrays" element={<Arrays/>} />
          <Route path="/Factorial" element={<Factorial/>} />
          <Route path="/Pathfinding" element={<PathfindingVisualizer/>} />
          <Route path="/sortingvisualizer" element={<SortingVisualizer></SortingVisualizer>} />
          <Route path="/bst" element={<BST/>} />
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path='/test' element={<VisualizerSorting></VisualizerSorting>} />
          <Route path='/test2' element={<VisualizePathfinding></VisualizePathfinding>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
