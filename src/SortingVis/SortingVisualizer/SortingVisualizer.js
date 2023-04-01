import React from "react";
import "./SortingVisualizer.css";
import { Button } from "react-bootstrap";
import Slider from "./Slider";
import LeftBar from "./LeftBar";
import NavigationBar from "../../NavBar/NavigationBar";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  render() {
    return (
      <div>
        <NavigationBar />
        
        <LeftBar />
        <h2 className="h-sort">Sorting Algorithms</h2>
<div className="theory-sort">
        <h3 id="first">Merge Sort</h3>Merge Sort is a divide-and-conquer
        algorithm that was invented by John von Neumann in 1945. It is a stable
        and efficient algorithm that has a time complexity of O(n log n) and is
        useful for sorting large amounts of data.
        <h4>Algorithm</h4>
        The Merge Sort algorithm can be described in the following steps:
        <ol>
          <li>
            Divide the unsorted list into n sublists, each containing one
            element (a list of one element is considered sorted).
          </li>
          <li>
            Repeatedly merge sublists to produce new sorted sublists until there
            is only one sublist remaining. This will be the sorted list.
          </li>
        </ol>
        <h4>Time Complexity</h4>
        <ul>
          <li>Best Case: O(n log n)</li>
          <li>Worst Case: O(n log n)</li>
          <li>Average Case: O(n log n)</li>
        </ul>
        <h3 id="second">Insertion Sort</h3>Insertion Sort is a simple sorting
        algorithm that is efficient for small lists and arrays. It is an
        in-place sorting algorithm that has a time complexity of O(n^2).
        <h4>Algorithm</h4>
        The Insertion Sort algorithm can be described in the following steps:
        <ol>
          <li>Iterate over the array.</li>
          <li>
            For each element, compare it with the elements before it and swap it
            with the previous element until it is in the correct order.
          </li>
          <li>Repeat until the entire array is sorted.</li>{" "}
        </ol>
        <h4>Time Complexity</h4>
        <ul>
          <li>Best Case: O(n)</li>
          <li>Worst Case: O(n^2)</li>
          <li>Average Case: O(n^2)</li>
        </ul>
        <h3 id="third">Quick Sort</h3> Quick Sort is a divide-and-conquer
        algorithm that was invented by Tony Hoare in 1959. It is an efficient
        algorithm that has a time complexity of O(n log n) in the average case
        and O(n^2) in the worst case.
        <h4>Algorithm</h4>
        The Quick Sort algorithm can be described in the following steps:
        <ol>
          <li>Choose a pivot element from the array.</li>
          <li>
            {" "}
            Partition the array into two sub-arrays, with elements less than the
            pivot in one sub-array and elements greater than the pivot in the
            other.
          </li>
          <li>Recursively apply Quick Sort to the two sub-arrays.</li>{" "}
        </ol>
        <h4>Time Complexity</h4>
        <ul>
          <li>Best Case: O(n log n )</li>
          <li>Worst Case: O(n^2)</li>
          <li>Average Case: O(n log n)</li>
        </ul>
        <h3 id="fourth">Bubble Sort</h3>Bubble Sort is a simple sorting
        algorithm that is inefficient for large lists and arrays. It has a time
        complexity of O(n^2) and is often used for educational purposes or for
        sorting small amounts of data.
        <h4>Algorithm</h4>
        The Bubble Sort algorithm can be described in the following steps:
        <ol>
          <li>Iterate over the array.</li>
          <li>
            For each pair of adjacent elements, compare them and swap them if
            they are in the wrong order.
          </li>
          <li>Repeat until the entire array is sorted.</li>{" "}
        </ol>
        <h4>Time Complexity</h4>
        <ul>
          <li>Best Case: O(n)</li>
          <li>Worst Case: O(n^2)</li>
          <li>Average Case: O(n^2)</li>
        </ul>
        <h3 id="fifth">Comparision</h3>
        <ol>
          <li>
            Time Complexity
            <ul>
              <li>Bubble Sort: O(n^2)</li>
              <li>Insertion Sort: O(n^2)</li>
              <li>Quick Sort: O(nlogn)</li>
              <li>Merge Sort: O(nlogn)</li>
            </ul>
          </li>
          <li>
            Space Complexity
            <ul>
              <li>Bubble Sort: O(1)</li>
              <li>Insertion Sort: O(1)</li>
              <li>Quick Sort: O(logn)</li>
              <li>Merge Sort: O(n)</li>
            </ul>
          </li>
          <li>
            Stability
            <ul>
              <li>Bubble Sort: Stable</li>
              <li>Insertion Sort: Stable</li>
              <li>Quick Sort: Unstable</li>
              <li>Merge Sort: Stable</li>
            </ul>
          </li>
        </ol>
        In general, the best sorting algorithm to use depends on the specific
        application and the properties of the data being sorted. For small
        datasets or nearly sorted data, insertion sort or bubble sort may be
        sufficient. For large datasets, merge sort or quick sort may be more
        appropriate. Additionally, the stability of the sorting algorithm may be
        an important factor in certain applications.
      </div>
      </div>
    );
  }
}


