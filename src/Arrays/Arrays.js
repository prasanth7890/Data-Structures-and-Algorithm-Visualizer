import React from "react";
import './Arrays.css'
import LeftBar from "./LeftBar";
import NavigationBar from "../NavBar/NavigationBar";
class Arrays extends React.Component {
    constructor() {
        super();
        this.state={
            l : [],
            n:5,
            inputValue:"",
            updateValue:0,
            indexValue:0,
            text:"",
            delValue:0

        };
    }
    
    getNew() {
        var l = []
        const arrayLength = this.state.n;
        const arrayValues = this.state.inputValue.split(",");
        if(arrayValues.length===arrayLength){
        for (let index = 0; index < arrayLength; index++) {
            const Num = parseInt(arrayValues[index]);
            l.push(Num); 
            this.setState({...l,l});
          }
        }
        else{
            alert("Enter correct number of elements");
        }
    }

    update(){
        const present =this.state.l;
        const val=this.state.updateValue;
        let i=this.state.indexValue
        if (i<=present.length-1){
        present[i]=val
        this.setState({l:present})  }
        else{
            this.setState({text:"Please enter a valid index number"})
        }
    }

    render() {
        const numBoxes = this.state.n;
        const boxes = [];
        const arrayValues = this.state.l;
        for (let i = 0; i < numBoxes; i++) {
            boxes.push(   
            <div key={i} className="square">
                <div className='random'>{arrayValues[i]}</div>
            </div>
            );
        }

    return (
        <div>
          <NavigationBar/>
          <LeftBar/>
          <h2 className="h-arr">ARRAYS</h2>
          <div className="theory">
        <h3 id="first">What is an Array?</h3>An array is a collection of
        elements of the same data type stored in contiguous memory locations.
        <br /><br />
        <h3 id="second">Key Concepts</h3>
        The following are some key concepts:
        <ul>
          <li>
            Index: Each element in an array is assigned a unique index, which
            represents its position in the array.
          </li>
          <li>
            Size: The size of an array refers to the number of elements it can
            hold.
          </li>
          <li>
            Static Arrays: Arrays whose size is fixed at compile-time are called
            static arrays.
          </li>
          <li>
            Dynamic Arrays: Arrays whose size can be dynamically resized at
            runtime are called dynamic arrays.
          </li>
        </ul>
        
        <h3 id="third">Operations</h3>
        The common operations performed on an array are:
        <ul>
          <li>
            Access: Retrieving the value of an element in the array using its
            index.
          </li>
          <li>Insertion: Adding a new element to the array.</li>
          <li>Deletion: Removing an element from the array.</li>{" "}
          <li>Search: Finding a specific element in the array.</li>
        </ul>
        <h3 id="fourth">Advantages</h3>
        Arrays have several advantages over other data structures:<br></br>
        Random Access: Elements in an array can be accessed in constant time
        using their index.<br></br>
        Compactness: Arrays store data in contiguous memory locations, making
        them efficient to traverse and cache.<br></br>
        Efficiency: Simple operations such as traversal and search are often
        faster in arrays than in other data structures.<br></br>
        <br />
        <h3 id="fifth">Disadvantages</h3>Arrays also have some disadvantages:
        <br></br>
        Fixed Size: Static arrays have a fixed size, which can limit their
        flexibility in certain situations.<br></br>
        Insertion and Deletion: Adding or removing an element in the middle of
        an array requires shifting all the elements after the insertion or
        deletion point, which can be inefficient.<br></br>
        Memory Management: Dynamic arrays require extra memory to handle
        resizing, and can also lead to memory fragmentation.
        <br /><br />
        <h3 id="sixth">Time Complexity</h3>
        The time complexity of common array operations is:<br></br>
        Access: O(1)<br></br>
        Insertion: O(n) in the worst case, where n is the number of elements in
        the array. Insertion at the end of an array has a time complexity of
        O(1) on average.<br></br>
        Deletion: O(n) in the worst case, where n is the number of elements in
        the array. Deletion at the end of an array has a time complexity of O(1)
        on average.<br></br>
        Traversal: O(n)<br></br>
        Search: O(n)<br></br><br />
        <br />
        <h3 id="visualize">Visualizer</h3>
      </div>
          <br></br>
        <div className="containerkabaap">
          <div className="container-array">
          <div>
            <br /><br /><br />
            Enter array size: &nbsp;
          <input
            type="number"
            value={this.state.n}
            onChange={(e) => this.setState({n: parseInt(e.target.value)})}
          />
          </div>
          <br></br>
          {boxes}<br></br><br />
          Enter the elements: &nbsp;
          <input
          placeholder="Enter In CSV Format"
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.setState({inputValue: (e.target.value)})}
          />
          <button class="button-85A" onClick={()=>this.getNew()}>Insert Values</button>
          <br></br><br />
          <span id="value">Enter the Index number: &nbsp;</span>
          <input
            id="value"
            type="number"
            value={this.state.indexValue}
            onChange={(e) => this.setState({indexValue: (e.target.value)})}
          />&nbsp;
          <span id="value">Enter the Value:&nbsp;</span>
          <input
            id="value"
            type="number"
            value={this.state.updateValue}
            onChange={(e) => this.setState({updateValue: (e.target.value)})}
          /> 
          <p>{this.state.text}</p><br />
              <button class="button-85A" onClick={()=>this.update()}>Update</button>
          </div>
          <br /><br />
        </div>
        </div>
      )
    }
}

export default Arrays;
// TODO - add more details for every small thing