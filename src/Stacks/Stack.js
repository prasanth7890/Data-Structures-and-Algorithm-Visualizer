import React, { useState } from "react";
import "./Stack.css";
import Box from "./Box";
import LeftBar from "./LeftBar.js";
import NavigationBar from "../NavBar/NavigationBar";

function Stack() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchIndex, setSearchIndex] = useState(-2);

  const handlePush = () => {
    if (inputValue !== "") {
      const iValue = parseInt(inputValue);
      if (stack.length === 0) {
        const box = {
          width: 150,
          height: 50,
          top: 400,
          id: 1,
          value: iValue,
        };
        stack.push(box);
      } else {
        const box = {
          width: 150,
          height: 50,
          top: stack[stack.length - 1].top - 50,
          id: stack.length + 1,
          value: iValue,
        };
        stack.push(box);
      }
      setStack(stack);
      console.log(stack);
      setInputValue("");
    }
  };

  const handlePop = () => {
    setStack(stack.slice(0, -1));
  };

  const handleClear = () => {
    setStack([]);
  };

  const findIndex = (value) => {
    const indexes = [];
    for (let i = 0; i <= stack.length - 1; i++) {
      if (stack[i].value === value) {
        indexes.unshift(i);
      }
    }

    setSearchIndex(indexes.length > 0 ? indexes.reverse() : -1);
  };

  return (
    <>
      <div>
        <header><NavigationBar/></header>
        
        <h2 className="title">Stack</h2>
        <br></br>
        <LeftBar />
        <div className="theory">
          <h3 id="first">What is Stack?</h3>
          Stack is a linear data structure that follows a particular order in
          which the operations are performed. The order may be LIFO(Last In
          First Out) or FILO(First In Last Out). LIFO implies that the element
          that is inserted last, comes out first and FILO implies that the
          element that is inserted first, comes out last. Stacks are commonly
          used to implement function calls and to keep track of execution
          contexts in programming languages.<br></br>
          <h3 id="second">Key Concepts</h3>
          The following are some key concepts related to the stack data
          structure:
          <ul>
            <li>
              Push operation: This is the process of adding an element to the
              top of the stack. When an element is pushed onto the stack, it
              becomes the most recent element in the stack.
            </li>
            <li>
              Pop operation: This is the process of removing the top element
              from the stack. When an element is popped from the stack, the next
              most recent element becomes the top element.{" "}
            </li>{" "}
            <li>
              Peek operation: This is the process of accessing the top element
              of the stack without removing it.{" "}
            </li>{" "}
            <li>
              Stack overflow: This occurs when the stack is full and a push
              operation cannot be performed.{" "}
            </li>{" "}
            <li>
              Stack underflow: This occurs when the stack is empty and a pop
              operation cannot be performed.
            </li>
          </ul>
          <h3 id="third">Implementation</h3>
          The stack data structure can be implemented using an array or a linked
          list. In both cases, the push and pop operations have a time
          complexity of O(1), which makes them very efficient.
          <ul>
            <li>
              Array-based implementation: In this implementation, the stack is
              represented as an array. The top of the stack is represented by an
              index variable that points to the top element in the array. Push
              and pop operations are performed by incrementing or decrementing
              the index variable.
            </li>
            <li>
              Linked list-based implementation: In this implementation, the
              stack is represented as a linked list. The top of the stack is
              represented by the head of the list. Push and pop operations are
              performed by adding or removing nodes from the head of the list.
            </li>
          </ul>
        </div>
        <div className="container-stack">
          {stack.map((item, id) => {
            return (
              <Box
                height={item.height}
                width={item.width}
                top={item.top}
                id={id}
                value={item.value}
                key={id}
              />
            );
          })}
        </div>
        <div id="top">
          <button className="button-85" onClick={handlePush}>
            Push
          </button>
          <button className="button-85" onClick={handlePop}>
            Pop
          </button>
          <button className="button-85" onClick={handleClear}>
            Clear
          </button>
          <button className="button-85" onClick={() => findIndex(searchValue)}>
            Search
          </button>
          <input
            className="input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label htmlFor="searchInput"></label>
          <input
            className="in"
            id="searchInput"
            type="number"
            onChange={(e) => setSearchValue(parseInt(e.target.value))}
            value={searchValue}
          />
          {searchIndex == -2 ? (
            <div></div>
          ) : searchIndex !== -1 ? (
            <p className="par">
              Index of {searchValue} is{" "}
              {searchIndex.map((item, index) => (
                <span key={index}>{item} </span>
              ))}
            </p>
          ) : (
            <p className="para">Entered element is not found in the stack</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Stack;
