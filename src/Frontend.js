import './Frontend.css';
// import Arrays from './Arrays';

import React from 'react';


function Frontend(){
    return(
      <div id="main">
          <div id="header">Algorithm Visualizer</div>
          <div id="container">
            <div className="algo-container">
              <div className="imageContainer">
                <img src="assets/trie.png" class="image" />
              </div>
            </div>
            <div class="algo-container">
              <div>
                {/* <a href="/Queue.js"> */}
                  <button>Posts</button>
                {/* </a> */}
              </div>
            </div>
            <div class="algo-container">
              {/* <a href="/Arrays.js" class="category_link"> */}
                <div class="imageContainer">
                  <img src="assets/bst.png" class="image" />
                </div>
                <div>Binary Search Tree</div>
              {/* </a> */}
            </div>
            <div class="algo-container">
              <a href="algos/path_finding/index.html" class="category_link">
                <div class="imageContainer">
                  <img src="assets/path_finding.png" class="image" />
                </div>
                <div>Path Finding Visualizer</div>
              </a>
            </div>
            <div class="algo-container">
              <a href="algos/sorting/index.html" class="category_link">
                <div class="imageContainer">
                  <img src="assets/sorting.png" class="image" />
                </div>
                <div>Sorting Visualizer</div>
              </a>
            </div>
          </div>
        </div>


    )
}
export default Frontend;