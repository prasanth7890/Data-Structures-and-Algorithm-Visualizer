import React from "react";
import "./SortingVisualizer.css";
import { Button } from "react-bootstrap";
import { getQuickSortAnimations } from "../Algorithms/quickSort";
import { getMergeSortAnimations } from "../Algorithms/mergesort";
import { getBubbleSortAnimations } from "../Algorithms/bubblesort";
import { getInsertionSortAnimations } from "../Algorithms/insertionSort";
import Form from 'react-bootstrap/Form'
import Slider from "./Slider";

// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 50;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = Math.floor((window.screen.width - 486) / 20);

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

// This is the color of array bars of pivot in quicksort
const PIVOT_COLOR = "yellow";

export default class VisualizerSorting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    }
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    if(this.state.reload == true) {
      window.location.reload();
    }
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({ array: array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    // console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i].length === 3) {
        const [barOneIdx, barTwoIdx, p] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        if (p === "PIVOT") {
          // swapping of the heights
          setTimeout(() => {
            const temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;
            // color change
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        const [First, Second] = animations[i];
        if (First === "pivot") {
          const barSecondStyle = arrayBars[Second].style;
          setTimeout(() => {
            barSecondStyle.backgroundColor = PIVOT_COLOR;
            barSecondStyle.innerHTML = "Prasanth";
          }, i * ANIMATION_SPEED_MS);
        } else {
          const barONESTYLE = arrayBars[First].style;
          const barSECONDSTYLE = arrayBars[Second].style;
          setTimeout(() => {
            var color = this.getColorChange(animations[i], animations[i + 1]);
            barONESTYLE.backgroundColor = color;
            barSECONDSTYLE.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  getColorChange(one, two) {
    const [a, b] = one;
    const [c, d] = two;
    if (a === c && b === d) {
      return SECONDARY_COLOR;
    } else return PRIMARY_COLOR;
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isKey = animations[i].length === 4 ? true : false;
      if (isKey) {
        const [barOneIdx, key, k, value] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        if (value === 1) {
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
        else {
          const color = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barOneStyle.height = key + "px";
          }, i * ANIMATION_SPEED_MS);
        }
      }
      else {
        const [barOneIdx, barTwoIdx, value] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        if (value === 1) {
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
        else {
          const color = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            barOneStyle.height = barTwoStyle.height;
          }, i * ANIMATION_SPEED_MS);
        }

      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          if (barOneIdx > barTwoIdx) {
            // swapping of the heights
            const temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  getSliderValue(value) {
    ANIMATION_SPEED_MS = 100 - value;
  }

  render() {
    const { array } = this.state;
    return (
      <div className="pedhanna">
        <h2 className="h1ofsorting">Sorting Algorithm Visualizer</h2>
        <Button id="generate-btn" size="sm" onClick={() => this.resetArray()}>
            Generate New Array
          </Button>
          &nbsp;&nbsp;&nbsp;
          <h6 className="choose-algo">Select Algorithm:</h6>
          <div className="buttons">
            <Button id="boot-btn" size="sm" onClick={() => this.mergeSort()}>
              Merge Sort
            </Button>
            <Button
              id="boot-btn"
              size="sm"
              onClick={() => this.insertionSort()}
            >
              Insertion Sort
            </Button>
            <Button id="boot-btn" size="sm" onClick={() => this.quickSort()}>
              Quick Sort
            </Button>
            <Button id="boot-btn" size="sm" onClick={() => this.bubbleSort()}>
              Bubble Sort
            </Button>
          </div>
          <div className="array-container">
            {array.map((value, idx) => {
              let h = value + "px";
              return (
                <div
                  className="array-bar"
                  id={idx}
                  key={idx}
                  style={{ height: h }}
                >
                  &nbsp;
                </div>
              );
            })}
          </div>
          <div className="slider">
            <Slider method={this.getSliderValue} />
          </div>
      </div>
    );
  }
}

        function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// TODO - Add details   