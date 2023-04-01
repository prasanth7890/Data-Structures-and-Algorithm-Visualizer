import { useState } from "react";
import Circle from "./Circle";
import insert from "./Insert";
import deleteNode from "./deleteNode";
import Path from "./Path";
import "./Circle.css";
import LeftBar from "./LeftBar";
import NavigationBar from "../NavBar/NavigationBar";

function BST() {
  const [root, setRoot] = useState(null);
  const [stack, setStack] = useState([]);
  const [cir, setCir] = useState([]);
  const [pathline, setPathline] = useState([]);
  const [count, setCount] = useState(1);
  const [traversal, setTraversal] = useState("");
  const [highlightedNode, setHighlightedNode] = useState(null);

  let INORDER = [];
  let PREORDER = [];
  let POSTORDER = [];

  var tempstring = "";

  // useEffect(()=>{
  //   console.log(cir);
  // }, [cir]);

  function circle_generator(n) {
    var lstack = stack;
    var lcircles = cir;

    let x = 500;
    let y = 100;
    const circle = {
      cx: x,
      cy: y,
      leftchild: null,
      rightchild: null,
      n: Math.floor(Math.random() * 100),
    };
    lstack.push(circle);
    lcircles.push(circle);

    setCir(lcircles); // used for creating nodes
    setRoot(lcircles[0]); // root of the node
    // console.log(lcircles);
    get_paths();
  }

  function get_paths() {
    const elim = cir;
    var paths = [];
    for (let x = 0; x < elim.length; x++) {
      if (elim[x].leftchild) {
        const path = {
          x1: elim[x].cx,
          y1: elim[x].cy,
          x2: elim[x].leftchild.cx,
          y2: elim[x].leftchild.cy,
        };
        paths.push(path);
      }
      if (elim[x].rightchild) {
        const path = {
          x1: elim[x].cx,
          y1: elim[x].cy,
          x2: elim[x].rightchild.cx,
          y2: elim[x].rightchild.cy,
        };
        paths.push(path);
      }
    }
    setPathline(paths);
  }

  const handleInsert = () => {
    const value = parseInt(window.prompt("Enter a value to insert:"));
    if (isNaN(value)) {
      return;
    }

    for (let i = 0; i < cir.length; i++) {
      if (cir[i].n === value) {
        alert("DUPLICATE DETECTED!😑 Please enter a different value");
        return;
      }
    }

    const Data = insert(value, root, cir, count);
    // console.log(Data.newCir, Data.cnt);
    setCir(Data.newCir);
    setCount(Data.cnt + 1);
    get_paths();
  };

  const handleDelete = () => {
    const value = parseInt(window.prompt("Enter a value to delete:"));
    if (isNaN(value)) {
      return;
    }

    var isPresent = false;
    for (let i = 0; i < cir.length; i++) {
      if (cir[i].n === value) {
        isPresent = true;
        break;
      }
    }

    if (!isPresent) {
      alert("Entered Value is not in the BST");
      return;
    }

    const Data = deleteNode(value, root, cir);
    // console.log(Data);
    setCir(Data);
    get_paths();
  };

  const animateSearch = (tempPath) => {
    var circular_nodes = document.getElementsByClassName("circle");
    var text_nodes = document.getElementsByClassName("textClass");
    // console.log(circular_nodes);
    // console.log(text_nodes);
    const search_path = tempPath;
    // console.log(search_path);

    for (let i = 0; i < search_path.length - 1; i++) {
      setTimeout(() => {
        let value = search_path[i].n;
        for (let j = 0; j < text_nodes.length; j++) {
          if (value === parseInt(text_nodes[j].textContent)) {
            circular_nodes[j].style.fill = "orange";
            break;
          }
        }
      }, i * 500);
    }

    for (let i = 0; i < search_path.length - 1; i++) {
      setTimeout(() => {
        let value = search_path[i].n;
        for (let j = 0; j < text_nodes.length; j++) {
          if (value === parseInt(text_nodes[j].textContent)) {
            circular_nodes[j].style.fill = "red";
            break;
          }
        }
        setHighlightedNode(null);
      }, (search_path.length + i) * 500);
    }
  };

  const handleSearch = () => {
    const value = parseInt(window.prompt("Enter a value:"));
    if (isNaN(value)) {
      return;
    }

    let currentNode = root;
    let tempPath = [];
    while (currentNode !== null) {
      tempPath.push(currentNode);

      if (value === currentNode.n) {
        setHighlightedNode(currentNode); //value found.
        // getting the path of searching
        animateSearch(tempPath);
        return;
      } else if (value < currentNode.n) {
        setHighlightedNode(currentNode);
        currentNode = currentNode.leftchild;
      } else {
        setHighlightedNode(currentNode);
        currentNode = currentNode.rightchild;
      }
    }

    //value not found, do something!
    alert("Entered Value Not Found!");
    setHighlightedNode(null);
  };

  function animateTraversal(array) {
    var circular_nodes = document.getElementsByClassName("circle");
    var text_nodes = document.getElementsByClassName("textClass");
    const traversal_path = array;
    // console.log(traversal_path);
    for (let i = 0; i < traversal_path.length; i++) {
      setTimeout(() => {
        let value = traversal_path[i].n;
        for (let j = 0; j < text_nodes.length; j++) {
          if (value === parseInt(text_nodes[j].textContent)) {
            circular_nodes[j].style.fill = "orange";
            break;
          }
        }
      }, i * 500);
    }

    setTimeout(() => {
      for (let i = 0; i < circular_nodes.length; i++) {
        circular_nodes[i].style.fill = "red";
      }
    }, traversal_path.length * 700);
  }

  const handleInorder = () => {
    if (INORDER.length > 0) {
      // console.log(INORDER);
      animateTraversal(INORDER);
      setTraversal(tempstring);
      return;
    }
    inorder(root);
    // console.log(INORDER);
    animateTraversal(INORDER);
    tempstring = "";
    for (let i = 0; i < INORDER.length; i++) {
      tempstring = tempstring + INORDER[i].n + " ";
    }
    tempstring = "Inorder : " + tempstring;
    setTraversal(tempstring);
  };

  const handlePreorder = () => {
    if (PREORDER.length > 0) {
      console.log(PREORDER);
      animateTraversal(PREORDER);
      setTraversal(tempstring);
      return;
    }
    preorder(root);
    // console.log(PREORDER);
    animateTraversal(PREORDER);
    tempstring = "";
    for (let i = 0; i < PREORDER.length; i++) {
      tempstring = tempstring + PREORDER[i].n + " ";
    }
    tempstring = "Preorder : " + tempstring;
    setTraversal(tempstring);
  };

  const handlePostorder = () => {
    if (POSTORDER.length > 0) {
      console.log(POSTORDER);
      animateTraversal(POSTORDER);
      setTraversal(tempstring);
      return;
    }
    postorder(root);
    // console.log(POSTORDER);
    animateTraversal(POSTORDER);
    tempstring = "";
    for (let i = 0; i < POSTORDER.length; i++) {
      tempstring = tempstring + POSTORDER[i].n + " ";
    }
    tempstring = "Postorder : " + tempstring;
    setTraversal(tempstring);
  };

  //TRAVERSALS
  function inorder(root) {
    //INORDER

    if (root == null) {
      return;
    }

    inorder(root.leftchild);

    INORDER.push(root);

    inorder(root.rightchild);
  }

  function preorder(root) {
    // PREORDER

    if (root == null) {
      return;
    }

    PREORDER.push(root);

    preorder(root.leftchild);

    preorder(root.rightchild);
  }

  function postorder(root) {
    //POSTORDER

    if (root == null) {
      return;
    }

    postorder(root.leftchild);

    postorder(root.rightchild);

    POSTORDER.push(root);
  }

  return (
    <>
      <NavigationBar />
      <LeftBar />
      <div>
        <h1 className="h1ofbst">Binary Search Tree</h1>
        <div className="theory-bst">
          <h3 id="first">Definition</h3>A Binary Search Tree (BST) is a binary
          tree data structure in which each node has at most two children, and
          the values stored in the left subtree are less than or equal to the
          value of the node, and the values in the right subtree are greater
          than or equal to the value of the node.
          <h3 id="second">Key Concepts</h3>
          <ul>
            <li>Root: The topmost node of the tree.</li>
            <li>Parent: A node that has at least one child.</li>
            <li>Child: A node that has a parent.</li>

            <li>Leaf: A node that has no children.</li>
            <li>Internal node: A node that has at least one child.</li>
            <li>
              Height: The number of edges on the longest path from a node to a
              leaf.
            </li>
            <li>
              Depth: The number of edges on the path from the root to a node.
            </li>
          </ul>
          <h3 id="third">Operations</h3>
          <ul>
            <li>
              Insertion: Add a new node to the tree while maintaining the order
              of the tree.
            </li>
            <li>
              Deletion: Remove a node from the tree while maintaining the order
              of the tree.
            </li>
            <li>Searching: Find a node with a specific value in the tree.</li>

            <li>
              Traversal: Visit all the nodes in the tree in a specific order.
            </li>
          </ul>
          <h3 id="fourth">Advantages</h3>
          <ul>
            <li>
              BSTs provide an efficient way to search for a particular key or
              value in a large dataset.
            </li>
            <li>
              They can be used to implement other data structures, such as sets
              and maps.
            </li>
            <li>They can be used to efficiently sort a list of elements.</li>
          </ul>
          <h3 id="fifth">Disadvantages</h3>
          <ul>
            <li>
              If the tree is not balanced, some operations may become
              inefficient and take more time than necessary.
            </li>
            <li>Balancing the tree can be complex and time-consuming.</li>
            <li>Insertion and deletion can be slow in some cases.</li>
          </ul>
          Overall, Binary Search Trees are a fundamental data structure in
          computer science with a range of applications, particularly in
          searching and sorting algorithms.
          <br />
          <br />
          <h3 id="visualize">Visualizer</h3>
        </div>
      </div>
      <div className="App">
        <svg width="1000" height="745" className="mainframe">
          {pathline.map((item, idx) => {
            return (
              <Path
                key={idx}
                x1={item.x1}
                x2={item.x2}
                y1={item.y1}
                y2={item.y2}
              />
            );
          })}

          {cir.map((item, idx) => {
            return (
              <Circle
                key={idx}
                idx={item.n}
                cx={item.cx}
                cy={item.cy}
                isHighlighted={item === highlightedNode}
              />
            );
          })}
        </svg>
        <div className="traversal">{traversal}</div>
        <button className="btn1 refresh" onClick={get_paths}>
          Refresh Paths
        </button>
        <div className="traversalBtns">
          <h4 className="headingoftraversal">Traversal</h4>
          <button className="btn1 inorder" onClick={handleInorder}>
            Inorder
          </button>
          <button className="btn1 preorder" onClick={handlePreorder}>
            PreOrder
          </button>
          <button className="btn1 postorder" onClick={handlePostorder}>
            PostOrder
          </button>
        </div>

        <div className="move">
          <button className="btn1 insert" onClick={handleInsert}>
            Insert
          </button>
          <button className="btn1 delete-bst" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn1 search-bst" onClick={handleSearch}>
            Search
          </button>
          <button
            className="btn1"
            onClick={() => {
              circle_generator(10);
            }}
          >
            Generate
          </button>
          <button
            className="btn1 clear"
            onClick={() => {
              setCir([]);
              setPathline([]);
              setRoot(null);
              setStack([]);
              setTraversal("");
            }}
          >
            clear
          </button>
        </div>
      </div>
    </>
  );
}

export default BST;
