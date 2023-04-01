import React, { useState } from "react";
import "./Que.css";
import Bin from "./Bin";
import LeftBar from "./LeftBar.js";
import NavigationBar from "../NavBar/NavigationBar";

function Queue() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchIndex, setSearchIndex] = useState(-2);

  const handleEnqueue = () => {
    if (inputValue !== "") {
      const iValue = parseInt(inputValue);
      if (queue.length === 0) {
        const box = {
          width: 50,
          height: 50,
          top: 124,
          left: 550,
          id: 1,
          value: iValue,
        };
        queue.push(box);
      } else {
        const box = {
          width: 50,
          height: 50,
          left: queue[queue.length - 1].left - 50,
          id: queue.length + 1,
          value: iValue,
        };
        queue.push(box);
      }
      setQueue(queue);
      setInputValue("");
    }
  };

  const handleDequeue = () => {
    setQueue(queue.slice(1));
  };

  const handleClear = () => {
    setQueue([]);
    setSearchIndex(-2);
  };

  const findIndex = (value) => {
    const indexes = [];
    for (let i = 0; i <= queue.length - 1; i++) {
      if (queue[i].value === value) {
        indexes.unshift(i);
      }
    }
    setSearchIndex(indexes.length > 0 ? indexes.reverse() : -1);
  };

  return (
    <>
    <NavigationBar/>
      <LeftBar />
      <div>
        <h2 className="h-q">Queue</h2>
        <div className="theory-q">
        <h3 id="first">What is Queue?</h3>A Queue is a linear list in which all
        insertions are made at one end of the list known as rear or tail of the
        queue and all deletions are made at the other end known as front or head
        of the queue. An insertion operation is also referred to as enqueuing a
        queue and a deletion operation is referred to as dequeuing a queue. A
        queue data structure obeys the principle of first in first out (FIFO) or
        first come first served (FCFS).
        <h3 id="second">Key Concepts</h3>
        The following are some key concepts related to the queue data structure:
        <ul>
          <li>
            Enqueue: Adding an element to the back of the queue is called
            enqueue.
          </li>
          <li>
            Dequeue: Removing an element from the front of the queue is called
            dequeue.
          </li>
          <li>
            Front: The front of the queue is the element that will be dequeued
            next.
          </li>{" "}
          <li>
            Back: The back of the queue is the element that was most recently
            enqueued.
          </li>{" "}
          <li>Empty: A queue is empty when it contains no elements.</li>
          <li>
            Full: A queue is full when it contains the maximum number of
            elements it can hold.
          </li>
        </ul>
        <h3 id="third">Implementation</h3>
        Queues can be implemented using arrays or linked lists. In an
        array-based implementation, a queue is represented as a circular array.
        In a linked list implementation, each node in the list contains an
        element and a pointer to the next node.
        <h3 id="fourth">Applications</h3>
        Queues are used in various applications such as CPU scheduling, traffic
        management, and printer spooling. They are also used in simulations to
        model real-world systems.
        <h3 id="fifth">Time Complexity</h3>
        The time complexity of enqueue and dequeue operations in a queue depends
        on the implementation. In an array-based implementation, enqueue and
        dequeue operations have a time complexity of O(1) on average. However,
        in the worst case scenario when the circular array is full or empty, the
        time complexity becomes O(n) where n is the number of elements in the
        queue. In a linked list implementation, both enqueue and dequeue
        operations have a time complexity of O(1) on average.
        <h3 id="sixth">Algorithm</h3>
        Implementation of insert and delete operations on a queue Let Q[1 : n]
        be an array implementation of a queue. Let FRONT and REAR be variables
        recording the front and rear positions of the queue. The FRONT variable
        points to a position which is physically one less than the actual front
        of the queue. ITEM is the element to be inserted into the queue. n is
        the maximum capacity of the queue. Both FRONT and REAR are initialized
        to 0.<br></br>
        Algorithm illustrates the insert operation on a queue.<br></br>
        Algorithm 1: Implementation of an insert operation on a queue<br></br>
        procedure INSERTQ (Q, n, ITEM, REAR)<br></br>
        /* insert item ITEM into Q with capacity n */<br></br>
        if (REAR = n) then QUEUE_FULL;<br></br>
        REAR = REAR + 1; /* Increment REAR*/<br></br>
        Q[REAR] = ITEM; /* Insert ITEM as the rear element*/<br></br>
        end INSERTQ<br></br>
        It can be observed in Algorithm 1 that addition of every new element
        into the queue increments the REAR variable. However, before insertion,
        the condition whether the queue is full (QUEUE_FULL) is checked. This
        ensures that there is no overflow of elements in a queue. The delete
        operation is illustrated in Algorithm 2. Though a deletion operation
        automatically deletes the front element of the queue, the variable ITEM
        is used as an output variable to store and perhaps display the value of
        the element removed.<br></br>
        Algorithm 2: Implementation of a delete operation on a queue<br></br>
        procedure DELETEQ (Q, FRONT, REAR, ITEM )<br></br>
        if (FRONT = REAR) then QUEUE_EMPTY;<br></br>
        FRONT = FRONT + 1;<br></br>
        ITEM = Q[FRONT];<br></br>
        end DELETEQ.<br></br>
        In Algorithm 2, observe that to perform a delete operation, the
        participation of both the variables FRONT and REAR is essential. Before
        deletion, the condition (FRONT = REAR) checks for the emptiness of the
        queue. If the queue is not empty, FRONT is incremented by 1 to point to
        the element to be deleted and subsequently the element is removed
        through ITEM. Note how this leaves the FRONT variable remembering the
        position which is one less than the actual front of the queue. This
        helps in the usage of (FRONT = REAR) as a common condition for testing
        whether a queue is empty, which occurs either after its initialization
        or after a sequence of insert and delete operations, when the queue has
        just emptied itself. <br /><br />
        <h3 id="visualize">Visualizer</h3>
        
      </div>
        <div className="bg">
          <input
          placeholder="Enter Value"
            id="input-num"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bq enq" onClick={handleEnqueue}>Enqueue</button>
          <button className="bq deq qbt" onClick={handleDequeue}>Dequeue</button>
          <button className="bq clear-q qbt" onClick={handleClear}>Clear</button>
          <input
          placeholder="Enter Value"
            id="searchInput"
            className="serInp"
            type="number"
            onChange={(e) => setSearchValue(parseInt(e.target.value))}
            value={searchValue}
          />
          <button className="bq finIdx qbt" onClick={() => findIndex(searchValue)}>Find Index</button>
          <br></br>
          {searchIndex == -2 ? (
            <div></div>
          ) : searchIndex !== -1 ? (
            <span className="span-1">
              Index of {searchValue} is
              {searchIndex.map((item, index) => (
                <span className="span-3" key={index}>{item}</span>
              ))}
            </span>
          ) : (
            <span className="span-2">Entered element is not found in the queue</span>
          )}
          <br></br>
          <div className="container-q">
            {queue.map((item, id) => {
              return (
                <Bin
                  height={item.height}
                  width={item.width}
                  left={item.left}
                  id={id}
                  value={item.value}
                  key={id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Queue;
