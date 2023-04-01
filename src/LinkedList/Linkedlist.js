
import React, { useState } from "react";
import "./LinkedList.css";
import LeftBar from './LeftBar.js'
import NavigationBar from "../NavBar/NavigationBar";

const LinkedList = () => {
  const [list, setList] = useState([]);
  const [insertValue, setInsertValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [deleteValue, setDeleteValue] = useState("");
  const [insertOption, setInsertOption] = useState("end");
  const [insertIndex, setInsertIndex] = useState("");

  const handleInsert = () => {
    if (insertValue !== "") {
      setList([...list, { value: insertValue, next: null }]);
      setInsertValue("");
    }
  };

  const handleInsertStart = () => {
    if (insertValue !== "") {
      setList([{ value: insertValue, next: list[0] }, ...list]);
      setInsertValue("");
    }
  };

  const handleInsertEnd = () => {
    if (insertValue !== "") {
      const newNode = { value: insertValue, next: null };
      if (list.length === 0) {
        setList([newNode]);
      } else {
        const lastNodeIndex = list.length - 1;
        const updatedLastNode = { ...list[lastNodeIndex], next: newNode };
        const updatedList = [
          ...list.slice(0, lastNodeIndex),
          updatedLastNode,
          newNode,
        ];
        setList(updatedList);
      }
      setInsertValue("");
    }
  };

  const handleInsertIndex = () => {
    if (insertValue !== "") {
      const index = parseInt(prompt("Enter the index to insert at:"));
      if (isNaN(index)) {
        alert("Invalid index");
        return;
      }
      if (index < 0 || index > list.length) {
        alert("Index out of range");
        return;
      }
      const newNode = { value: insertValue, next: null };
      if (index === 0) {
        setList([{ value: insertValue, next: list[0] }, ...list]);
      } else if (index === list.length) {
        handleInsertEnd();
      } else {
        const prevNodeIndex = index - 1;
        const nextNodeIndex = index;
        const updatedPrevNode = { ...list[prevNodeIndex], next: newNode };
        const updatedList = [
          ...list.slice(0, prevNodeIndex),
          updatedPrevNode,
          newNode,
          ...list.slice(nextNodeIndex),
        ];
        setList(updatedList);
      }
      setInsertValue("");
    }
  };

  const handleSearch = () => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].value === searchValue) {
        alert(`Found at index ${i}`);
        setSearchValue("");
        return;
      }
    }
    alert("Not found");
    setSearchValue("");
  };

  const handleDelete = (option) => {
      if (option === "start") {
        if (list.length > 0) {
          setList(list.slice(1));
        }
      } else if (option === "end") {
        if (list.length === 1) {
          setList([]);
        } else if (list.length > 1) {
          const secondLastNodeIndex = list.length - 2;
          const updatedSecondLastNode = {
            ...list[secondLastNodeIndex],
            next: null,
          };
          const updatedList = [
            ...list.slice(0, secondLastNodeIndex),
            updatedSecondLastNode,
          ];
          setList(updatedList);
        }
      } else if (option === "index") {
        const index = parseInt(prompt("Enter the index to delete:"));
        if (isNaN(index)) {
          alert("Invalid index");
          return;
        }
        if (index < 0 || index >= list.length) {
          alert("Index out of range");
          return;
        }
        if (index === 0) {
          setList(list.slice(1));
        } else if (index === list.length - 1) {
          handleDelete("end");
        } else {
          const prevNodeIndex = index - 1;
          const nextNodeIndex = index + 1;
          const updatedPrevNode = {
            ...list[prevNodeIndex],
            next: list[nextNodeIndex],
          };
          const updatedList = [
            ...list.slice(0, prevNodeIndex),
            updatedPrevNode,
            ...list.slice(nextNodeIndex),
          ];
          setList(updatedList);
        }
      }
      setDeleteValue("");
  };

  const handleKeyDown = (event, action) => {
    if (event.key === "Enter") {
      switch (action) {
        case "insert":
          handleInsert();
          break;
        case "search":
          handleSearch();
          break;
        case "delete":
          handleDelete();
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
    <NavigationBar/>
    <LeftBar/><h2 className="h-l">Singly Linked List</h2>
    <div className="theory-LL">
        <h3 id="first">What is Linked List?</h3>A linked list is a linear data
        structure in which elements are stored in nodes, and each node contains
        a value and a reference (pointer) to the next node in the list. A linked
        representation of data structure known as a linked list is a collection
        of nodes. Each node is a collection of fields categorized as data items
        and links. The data item fields hold the information content or data to
        be represented by the node. The link fields hold the addresses of the
        neighbouring nodes or of those nodes which are associated with the given
        node as dictated by the application.
        <h3 id="second">Key Concepts</h3>
        The following are some key concepts:
        <ul>
          <li>
            Node: Each element in a linked list is called a node, and it
            contains a value and a reference (pointer) to the next node in the
            list.
          </li>
          <li>Head: The first node in a linked list is called the head.</li>
          <li>Tail: The last node in a linked list is called the tail.</li>{" "}
          <li>
            Singly Linked List: A linked list in which each node has a reference
            to the next node but not to the previous node is called a singly
            linked list.
          </li>{" "}
          <li>
            Doubly Linked List: A linked list in which each node has a reference
            to both the next node and the previous node is called a doubly
            linked list.
          </li>
        </ul>
        <h3 id="third">Operations</h3>
        The common operations performed on a linked list are:
        <ul>
          <li>Insertion: Adding a new node to the list.</li>
          <li>Deletion: Removing an existing node from the list.</li>
          <li>Search: Finding a specific node in the list.</li>{" "}
        </ul>
        <h3 id="fourth">Drawbacks of sequential data structures</h3>
        Arrays are fundamental sequential data structures. Even stacks and
        queues rely on arrays for their representation and implementation.
        However, arrays or sequential data structures in general, suffer from
        the following drawbacks:<br></br>
        (i) inefficient implementation of insertion and deletion operations and
        <br></br>
        (ii) inefficient use of storage memory.
        <h3 id="fifth">Merits of linked data structures</h3>A linked
        representation serves to counteract the drawbacks of sequential
        representation by exhibiting the following merits:<br></br>
        (i) Efficient implementation of insertion and deletion operations.
        Unlike sequential data structures, there is complete absence of data
        movement of neighbouring elements during the execution of these
        operations.<br></br>
        (ii) Efficient use of storage memory. The operation and management of
        linked data structures are less prone to create memory fragmentation.
        <h3 id="sixth">Time Complexity</h3>
        The time complexity of common linked list operations depends on the
        implementation. In a singly linked list, insertion and deletion at the
        head have a time complexity of O(1), while insertion and deletion at the
        tail have a time complexity of O(n), where n is the number of nodes in
        the list. In a doubly linked list, insertion and deletion at both the
        head and tail have a time complexity of O(1). Traversal and search
        operations have a time complexity of O(n), where n is the number of
        nodes in the list.
        <h3 id="seventh">Singly Linked Lists</h3>
        <h4>Representation of a singly linked list</h4>A singly linked list is a
        linear data structure, each node of which has one or more data item
        fields (DATA) but only a single link field (LINK).
        <h4>Algorithm</h4>
        Insert operation Given a singly linked list START, to insert a data
        element ITEM into the list to the right of node NODE, (ITEM is to be
        inserted as the successor of the data element represented by node NODE)
        the steps to be undertaken are given below. <br></br>
        (i) Call GETNODE(X) to obtain a node to accommodate ITEM. Node has
        address X.<br></br>
        (ii) Set DATA field of node X to ITEM (i.e.) DATA(X) = ITEM.<br></br>
        (iii) Set LINK field of node X to point to the original right neighbour
        of node NODE (i.e.) LINK(X) = LINK(NODE).<br></br>
        (iv) Set LINK field of NODE to point to X (i.e.) LINK(NODE) = X.
        <br></br>
        Algorithm 1 illustrates a pseudo code procedure for insertion in a
        singly linked list which is non empty.<br></br>
        Algorithm 1: To insert a data element ITEM in a non empty singly liked
        list START, to the right of node NODE<br></br>
        Procedure INSERT_SL(START, ITEM, NODE)<br></br>
        /* Insert ITEM to the right of node NODE in the list START */<br></br>
        Call GETNODE(X);<br></br>
        DATA(X) = ITEM;<br></br>
        LINK(X) = LINK(NODE); /* Node X points to the original<br></br>
        right neighbour of node NODE */<br></br>
        LINK(NODE) = X;<br></br>
        end INSERT_SL.<br></br>
        Delete operation Given a singly linked list START, the delete operation
        can acquire various forms such as deletion of a node NODEY next to that
        of a specific node NODEX, or more commonly deletion of a particular
        element in a list and so on. We now illustrate the deletion of a node
        which is the successor of node NODEX.<br></br>
        The steps for the deletion of a node next to that of NODEX in a singly
        linked START is given below.<br></br>
        (i) Set TEMP a temporary variable to point to the right neighbour of
        NODEX<br></br>
        (i.e.) TEMP = LINK(NODEX). The node pointed to by TEMP is to be deleted.
        <br></br>
        (ii) Set LINK field of node NODEX to point to the right neighbour of
        TEMP<br></br>
        (i.e.) LINK(NODEX) = LINK(TEMP).<br></br>
        (iii) Dispose node TEMP (i.e.) RETURN (TEMP)<br></br>
        Algorithm 3: Deletion of a node which is to the right of node NODEX in a
        singly linked list START<br></br>
        Procedure DELETE_SL(START, NODEX)<br></br>
        if (START = NIL) then<br></br>
        Call ABANDON_DELETE;<br></br>
        /*ABANDON_DELETE terminates the delete operation */<br></br>
        else<br></br>
        end DELETE_SL<br></br>
        <h3 id="visualize">Visualizer</h3>
      </div>
      <div className="linked-list-container">
      
      <ul className="linked-list">
        {list.map((node, index) => (
          <li
            className={`nodel ${
              node.value === searchValue ? "highlight-found" : "highlight-seach"
            } ${node.value === deleteValue ? "highlight-delete" : ""}`}
            key={index}
          >
            <div className="value">{node.value}</div>
            {index < list.length - 1 && <div className="arrow-right"></div>}
          </li>
        ))}
      </ul>
      <div className="input-container">
        <div>
        &nbsp;
          <input
          id="ins"
          placeholder="Insert"
            type="number"
            value={insertValue}
            onChange={(e) => setInsertValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "insert")}
          />
          <button onClick={handleInsertStart}>Insert at Start</button>
          <button onClick={handleInsertEnd}>Insert at End</button>
          <button onClick={handleInsertIndex}>Insert at Index</button>
        </div>
        <br></br>
        &nbsp;
        &nbsp;
        &nbsp;
        <div className="search">
          <input
          placeholder="Search"
            type="number"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "search")}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <br></br>
        <div className="delete">
          <button onClick={() => handleDelete("start")}>Delete at Start</button>
          <button onClick={() => handleDelete("end")}>Delete at End</button>
          <button onClick={() => handleDelete("index")}>Delete at Index</button>
        </div>
      </div>
    </div>
    </>
    
  );
};
export default LinkedList;
