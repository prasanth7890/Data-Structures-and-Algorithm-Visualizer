import React, {Component} from 'react';
import './PathfindingVisualizer.css';
import NavigationBar from '../../../NavBar/NavigationBar';
import LeftBar from 'D:/ReactJS/app/src/PathFindindingVis/PathfindingVisualizer/Node/LeftBar';


export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div>
          <NavigationBar/>
          <LeftBar/>
          <h2 className='h-path'>Pathfinding Algorithms</h2>
        </div>
        <div className="theory-path">
        <h3 id="first">Dijkstra's Algorithm</h3>Dijkstra's Algorithm is a
        shortest-path algorithm that is used to find the shortest path between a
        source vertex and all other vertices in a weighted graph.
        <h4>Key Concepts</h4>
        <ul>
          <li>
            Graph: A collection of nodes or vertices and edges that connect
            them.
          </li>
          <li>Vertex: A node in a graph.</li>
          <li>Edge: A connection between two vertices with a weight.</li>

          <li>
            Priority Queue: A data structure that allows you to add elements
            with a priority and remove the element with the highest priority.
          </li>
        </ul>
        <h4>Algorithm</h4>
        <ol>
          <li>
            Create a priority queue and initialize it with the source vertex and
            a distance of 0.
          </li>
          <li>
            Initialize the distance to all other vertices as infinity and mark
            them as unvisited.
          </li>
          <li>While the priority queue is not empty, do the following:</li>
          <ul>
            <li>
              Remove the vertex with the smallest distance from the priority
              queue.
            </li>
            <li>
              For each of its neighbors, calculate the distance from the source
              through the current vertex.
            </li>
            <li>
              {" "}
              If the calculated distance is less than the previously known
              distance, update the distance and add the vertex to the priority
              queue.
            </li>
          </ul>
          <li>
            After the algorithm terminates, the distance to each vertex from the
            source will be the shortest distance.
          </li>
        </ol>
        <h4>Time Complexity</h4>
        The time complexity of Dijkstra's algorithm depends on the data
        structure used to implement the priority queue. If a binary heap is
        used, the time complexity is O((E+V) log V), where E is the number of
        edges and V is the number of vertices in the graph. If a Fibonacci heap
        is used, the time complexity can be improved to O(E + V log V). In the
        worst case, when all edge weights are equal, the time complexity of
        Dijkstra's algorithm can be further improved to O(V + E log V) using a
        bucket priority queue.
        <h4>Applications</h4>
        <ul>
          <li>Routing protocols in computer networks.</li>
          <li>GPS navigation systems.</li>
          <li>Finding the shortest path between any two locations on a map.</li>
        </ul>
        <h3 id="second">A* Algorithm</h3>
        A* Algorithm is a pathfinding algorithm that combines elements of
        Dijkstra's Algorithm and heuristic search to find the shortest path
        between a start node and an end node in a graph.
        <h4>Key Concepts</h4>
        <ul>
          <li>
            Graph: A collection of nodes or vertices and edges that connect
            them.
          </li>
          <li>Vertex: A node in a graph.</li>
          <li>Edge: A connection between two vertices with a weight.</li>

          <li>
            Heuristic Function: An estimate of the distance between a vertex and
            the goal node.
          </li>
          <li>Open List: A list of vertices to be expanded.</li>
          <li>
            Closed List: A list of vertices that have already been expanded.
          </li>
        </ul>
        <h4>Algorithm</h4>
        <ol>
          <li>
            Create an open list and add the starting vertex with a cost of 0.
          </li>

          <li>While the open list is not empty, do the following:</li>
          <ul>
            <li>
              Remove the vertex with the lowest total cost (distance from the
              start plus the heuristic estimate of the distance to the goal)
              from the open list.
            </li>
            <li> If the current vertex is the goal, return the path.</li>
            <li>
              Otherwise, expand the current vertex by adding its neighbors to
              the open list and calculating their costs.
            </li>
            <li> Add the current vertex to the closed list.</li>
          </ul>
          <li>
            If the open list is empty and the goal has not been reached, then
            there is no path between the start and end nodes.
          </li>
        </ol>
        <h4>Time Complexity</h4>
        The time complexity of A* algorithm depends on several factors,
        including the heuristic function used, the data structure used to
        implement the open and closed lists, and the branching factor of the
        graph. In general, A* algorithm has a worst-case time complexity of
        O(b^d), where b is the branching factor of the graph and d is the depth
        of the solution. However, if the heuristic function is admissible and
        consistent, the time complexity can be reduced to O(d log d), which is
        much faster than the worst-case time complexity. In practice, A*
        algorithm is often much faster than Dijkstra's algorithm, especially for
        large graphs with many edges and vertices.
        <h4>Applications</h4>
        <ul>
          <li>Pathfinding in video games.</li>
          <li>Routing in transportation networks.</li>
          <li>Robot navigation.</li>
        </ul>
        <h3 id="third">Breadth First Search (BFS)</h3>Breadth-First Search (BFS)
        is a graph traversal algorithm that visits all the vertices of a graph
        in breadth-first order, i.e., it visits all the vertices at the same
        level before moving on to the vertices at the next level.
        <h4>Key Concepts</h4>
        <ul>
          <li>
            Graph: A collection of nodes or vertices and edges that connect
            them.
          </li>
          <li>Vertex: A node in a graph.</li>
          <li>Edge: A connection between two vertices with a weight.</li>

          <li>
            Adjacency List: A data structure that stores the neighbors of each
            vertex in a graph.
          </li>
          <li>
            Queue: A data structure that follows the First In First Out (FIFO)
            principle.
          </li>
          <li>
            Visited: A list that keeps track of which vertices have already been
            visited.
          </li>
        </ul>
        <h4>Algorithm</h4>
        <ol>
          <li>Create a queue and enqueue the starting vertex.</li>
          <li>Mark the starting vertex as visited.</li>
          <li>While the queue is not empty:</li>
          <ul>
            <li>Dequeue a vertex from the queue.</li>
            <li> Visit the dequeued vertex.</li>
            <li>
              Enqueue all the neighbors of the dequeued vertex that have not
              been visited yet.
            </li>
            <li> Mark all the neighbors as visited.</li>
          </ul>
        </ol>
        <h4>Time Complexity</h4>
        The time complexity of Breadth-First Search (BFS) algorithm is O(V+E),
        where V is the number of vertices and E is the number of edges in the
        graph. This is because BFS visits every vertex and edge of the graph at
        most once, and the time it takes to visit each vertex and edge is
        constant. In the worst case, BFS has to explore the entire graph, which
        gives it a time complexity of O(V+E). However, in practice, the time
        complexity of BFS may be much lower, especially if the graph is sparse
        or if the search terminates early.
        <h4>Applications</h4>
        BFS is commonly used to find the shortest path between two vertices in
        an unweighted graph. It can also be used to find all the connected
        components of a graph and to check whether a graph is bipartite.
        Additionally, BFS can be used to traverse a tree or a binary tree in
        level order.
        <h3 id="fourth">Depth First Search (DFS)</h3>
        DFS is a searching algorithm used for traversing or searching a tree or
        graph data structure. In DFS, we start from the root node (or any
        arbitrary node), and explore each branch as far as possible before
        backtracking.
        <h4>Algorithm</h4>
        The basic algorithm for DFS is:
        <ol>
          <li>Create a visited set to keep track of visited nodes.</li>
          <li>Push the starting node to a stack.</li>

          <li>While the stack is not empty, do the following:</li>
          <ul>
            <li>Pop a node from the stack.</li>
            <li>
              {" "}
              If the node is not visited, mark it as visited and process it
              (print it, for example).
            </li>
            <li>
              Push all the unvisited neighboring nodes of the popped node to the
              stack.
            </li>
            <li> Repeat step 3 until the stack is empty.</li>
          </ul>
        </ol>
        <h4>Time Complexity</h4>
        The time complexity of DFS is O(V + E), where V is the number of
        vertices (nodes) and E is the number of edges in the graph or tree. This
        is because, in the worst case, we may visit every vertex and edge in the
        graph or tree.
        <h4>Applications</h4>DFS is used in various applications, such as:
        <ul>
          <li>Finding connected components in a graph</li>
          <li>Topological sorting</li>
          <li>Finding strongly connected components in a directed graph</li>
          <li>Solving puzzles such as the maze problem</li>
        </ul>
        <h3 id="fifth">Comparision</h3>Dijkstra's algorithm, A* algorithm, BFS,
        and DFS are all popular search algorithms used to traverse graphs or
        trees. Here is a comparison of these algorithms:
        <ol>
          <li>
            Dijkstra's algorithm: This is a single-source shortest path
            algorithm. It uses a priority queue to explore the nodes of a graph
            in increasing order of their distances from the source node.
            Dijkstra's algorithm guarantees the shortest path if the graph has
            non-negative edge weights.
          </li>{" "}
          <li>
            A* algorithm: A* algorithm is also a shortest path algorithm, but it
            uses heuristics to guide its search. A* algorithm evaluates each
            node based on two functions: g(n) which is the cost of the path from
            the start node to the current node, and h(n) which is an estimate of
            the cost from the current node to the goal node. A* algorithm
            selects the node with the lowest value of f(n) = g(n) + h(n) for
            expansion.
          </li>
          <li>
            BFS: BFS is a level-by-level traversal algorithm that explores all
            nodes of the same level before moving to the next level. It can be
            used to find the shortest path in an unweighted graph. BFS can also
            be used to find the minimum number of steps required to reach a
            target node.
          </li>
          <li>
            DFS: DFS is a traversal algorithm that explores as far as possible
            along each branch before backtracking. It can be used to find
            connected components, detect cycles, and search for a path from a
            source node to a target node.
          </li>
        </ol>
        Comparison:
        <ul>
          <li>
            Dijkstra's algorithm and A* algorithm are both used to find the
            shortest path, but A* algorithm is more efficient as it uses
            heuristics to guide its search.
          </li>
          <li>
            BFS is good for finding the shortest path in an unweighted graph,
            while Dijkstra's algorithm and A* algorithm work better for weighted
            graphs.
          </li>
          <li>
            DFS can be used to find a path from a source node to a target node,
            but it does not guarantee the shortest path.
          </li>
          <li>
            DFS can be faster than BFS for finding a path, but it may not find
            the optimal path in a weighted graph.
          </li>
        </ul>
        Overall, the choice of algorithm depends on the specific problem and the
        characteristics of the graph or tree being traversed.
      </div>
      </>
    );
  }
}

