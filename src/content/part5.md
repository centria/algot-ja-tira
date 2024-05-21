---
title: "Graphs"
nav_order: 6
hidden: false
---


We can solve many algorithmic problems by representing the problem as a *graph* and use a suitable graph algorithm. A typical example of a graph is a network of roads, which comprises of cities and the roads between them. In such a graph, the problem could be for example finding the route from city *a* to city *b*.

## Graph terms

*Graph* is made from *nodes* (or *vertexes*) and the *edges* between them. Below is a graph with five nodes and seven edges. We mark the amount of nodes with the letter *n* and the amount of nodes with the letter *m*. In addition, we number the nodes with integers *1, 2,... ,n*.

We say that two nodes are *adjacent*, if there is an edge between them. The *neighbors* of a node are the nodes which are connected with an edge, and the *degree* of a node is the amount of neighbors. In our example, the node *2* has neighbors *1*, *4* and *5*, so its degree is 3.

![Graph 1](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph1.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

A *path* in a graph is a sequence going along the edges from the starting node to the target node. Below we can see two possible paths from node *1* to node *5* in our example graph. The first path is 1 &#8594; 2 &#8594; 5 and another path is 1 &#8594; 3 &#8594; 4 &#8594; 5.

![Graph 2](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph2.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)


A path is a *cycle*, if the starting and the ending nodes are the same, it has at least one edge and it does not go through the same node or edge more than once. Beloe we have an example cycle 2 &#8594; 4 &#8594; 5 &#8594; 2. If there are no cycles in a graph, we call it *acyclic*.

![Graph 3](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph3.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)


A graph is *connected*, if it has at least one node, and there is an edge between every pair of nodes. For example, the graph above is connected, but the graph below is not, as for example there is no edge between nodes *1* and *2*.

![Graph 4](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph4.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

A graph can always be presented as a set of *connected components*. Above, the connected components are {1,3} and {2,4,5}. A node with not incident edges is itself a component. A graph that is itself connected has exactly one component, consisting the whole graph.

A graph is a *tree*, if it is both connected and acyclic, like below. In a tree, the amount of edges is always one less than the amount of nodes, and there is a *simple edge* between each pair of nodes.

![Graph 5](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph5.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)


In a *directed* graph each edge has a direction, along which we have to travense in the graph. The directions restrict our travel in the graph. Below is an example of a directed graph, where we can go from node *1* to node *5* with path 1 &#8594; 2 &#8594; 5, but there is no way to travel from node *5* to node *1*.

![Graph 6](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph6.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

In a *weighted* graph each edge has an associated weight, which typically represents the length of the edge. As we traverse a path in a weighted graph, the length of the path is the sum of the edges.

![Graph 7](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph7.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

In the example above, the path 1 &#8594; 2 &#8594; 5 has a weight of *5 + 8 = 13*, and path 1 &#8594; 3 &#8594; 4 &#8594; 5 has a weight of *2 + 4 + 3 = 9*.

# Graphs in programming

There are several ways to represent a graph in programming. Choosing the proper representation is dependant on how we want to handle the graph in our algorithms, as each representation has their benefits. Let's see three ways to represent a graph.

## Adjacency list

One common way to represent a graph is to create an *adjacency list* for each node. The list tells, into which nodes we can traverse along with nodes. In the picture below is a graph and the adjacency list representation. 

![Graph 8](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph8.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

If we want to create an adjacency list in C# we can create an array of Lists

```cpp
List<int>[] graph = new List<int>[n + 1];
```

And we can initialize our adjacency list with

```cpp
for (int i = 1; i <= n; i++)
{
  graph[i] = new List<int>();
}
```

Add edges to the lists with

```cpp
graph[1].Add(2);
graph[1].Add(3);
graph[1].Add(4);
graph[2].Add(4);
graph[2].Add(5);
graph[3].Add(4);
graph[4].Add(5);
```

Adjacency list is a quite often a useful way to create a graph, as we might for example want to find out, which nodes we can get to from a certain node, traversing the edges. For example, the following code goes through all the nodes, we can traverse to from node *x*:

```cpp
foreach (int i in graph[x])
{
  // Do something with the node i
}
```

If the graph is undirected, or we can move along the edges both ways, we can record the graph similarly, as long as we save each edge both ways. If the graph would we weighted, we can save both the node and the weight.

## Edge list

Another way of saving a graph is to create an *edge list*, which contains all the edges in the graph. In C#, we can create a list

```cpp
List<Edge> edges = new List<Edge>();
```

which contains the following kind of edges:

```cpp
public class Edge
{
  public int beginning, end;

  public Edge(int beginning, int end)
  {
    this.beginning = beginning;
    this.end = end;
  }
}
```

The following code creates an edge list which corresponds with our example graph:

```cpp
edges.Add(new Edge(1,2));
edges.Add(new Edge(1,3));
edges.Add(new Edge(1,4));
edges.Add(new Edge(2,4));
edges.Add(new Edge(2,5));
edges.Add(new Edge(3,4));
edges.Add(new Edge(4,5));
```

Edge list is a good representation for algorithms, where we want to go through as easily as possibly all the edges in a graph and there is no need to find out all the edges of a certain node.

## Adjacency matrix

![Graph 9](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/graph9.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)


*Adjacency matrix* is a two-dimensional array, which tells about all the edges, if they exist in a graph. The value in matrix row *a* in column *b* determines, if there is an edge from node *a* to *b*. Above you can see an example of an adjacency matrix. In the example, each value is either 0 (no edge) or 1 (edge exists).

In C#, we can do the adjacency matrix like follows:

```cpp
int[,] graph = new int[n + 1, n + 1];
```

After which we can form the matrix like this:

```cpp
graph[1, 2] = 1;
graph[1, 3] = 1;
graph[1, 4] = 1;
graph[2, 4] = 1;
graph[2, 5] = 1;
graph[3, 4] = 1;
graph[4, 5] = 1;
```

If the graph would be weighted, we could similarly define the weights as the values in the matrix. The advantage of adjacency matrix is that we can easily determine the existence of certain edge from the graph. This does how ever take up plenty of memory and it cannot ve used, if there are a large amount of nodes.


# Traversing a graph

Next we will get to know two essential algorithms, which traverse the nodes and edges of a graph. First we will examine *depth-first search (DFS)* which is a more general algorithm for traversing a graph, and then we will examine *breadth-first search (BFS)*, which is used for finding the shortest paths in the graph.

## DFS

*depth-first search (DFS)* is a general tool for handling graphs, with which we can determine multiple aspects of the structure of a graph. When we begin examining the graph with DFS, we first must deterine, from which node we begin (root node). The search continues to all the nodes in turn, which are accessible from the starting node via edges.

The DFS maintains information about each node, if they have been visited or not. When the search reaches a node it has not visited yet, it marks the node visited and begins to traverse the edges beginning from said node. With each edge the search advances to the parts of a graph, which are accessible via an edge. Once the search has gone through all the edges, it backs away the same route from whence it came to the edge.

![DFS](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/dfs.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

In the picture above you can see an example of depth-first search in action. With each step, gray nodes are where the search has visited. In this example, the search starts from node *1*, from which it can access nodes *2* and *3*. The search will advance to node *2* first, from which it can again get to nodes *4* and *5*. After this the search does not find more edges from this part of the graph, so it will back away the same route, back to node *1*. The search will continue to node *3*, from which it cannot access more nodes. Now the search has visited all the nodes, it can acess from node *1*.

DFS is convenient to create recursively in the following manner:

```console
search(node)
  if visited[node]
    return
  visited[node] = true
  for neighbor in graph[node]
    search(neighbor)
```

The search begins, when we call the method *search* with the starting node as a parameter. With each call the method checks first, if we have visited the node it has been given, and return if so. Otherwise the method marks the node visited and recursively advances to all its neighbors. The search takes time *O(n+m)*, as we handle each node and edge at maximum once.

How could we use DFS? Here are a few examples for usage:

### Finding a path

With DFS we can find a path from node *a* to node *b*, if such a path exists. This is done by starting the search from node *a* and returning, when we get to node *b*. If there are several paths, DFS will find one of them, depending on the handling order of the nodes.

### Connections and components

An undirected graph is *connected*, if all the nodes are connected to each other. We can examine the connections of a graph by starting our search from any node and examining, if the search reaches all the nodes of the graph. In addition, we can find all the *connected components* of the graph by going through the nodes and beginning a new search, whenever we come across an unvisited node. Each search thus forms one component.

### Finding cycles

If an undirected graph contains a *cycle*, we notice this with DFS, if we come to a visited node via another route (than the one we have used to get there earlier). Thus we can find a cycle from the graph, if such exists.

## BFS

*breadth-first search (BFS)*, alike DFS, goes through all the nodes, it can access with edges from the given root node. The difference comes from the order they are accessed with. BFS traverses the nodes by *levels* so, that it handles the nodes in the order in which they were first encountered during the search.

Even though we could use BFS as a general tool for traversing a graph like DFS, we usually use it when we are interested in the *shortest paths*. With breath-first search we determine the length of the shortest path, or the *distance* from the rootnode to each node we encounter during the search. In this example, we assume that the length of the path is determined by the amount of edges, i.e. the shortest path is the one with least edges along the way.

![BFS](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/bfs.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

Above you can see an example of BFS in action, when we start our search from node *1*. First we handle node *1*, from which we can access nodes *2* and *3*. This means, that the shortest paths to nodes *2* and *3* are 1 &#8594; 2 and 1 &#8594; 3, and the distance to these nodes is 1. Then we handle the node *2*, from which we can access new nodes, *4* and 5*. This leads to shortest paths to *4* and 5* being 1 &#8594; 2 &#8594; 4 and 1 &#8594; 2 &#8594; 5, and the distance to these nodes is 2. Finally, we handle nodes 3, 4 and 5 in this order, from which we cannot access any more nodes.


One usual way to implement breadth-first search is to use a *queue* (In C#, [**Queue**](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1?view=netcore-3.1)). With a queue we can traverse the nodes in the order we have found them with BFS. We assumme, that the *queue* has a method *enqueue*, which adds an element to the end, and a method *dequeue*, which returns and removes the first element from the queue. The following code implements BFS beginning from the root-node *root*:

```console
queue.enqueue(root)
visited[root] = true
distance[root] = 0
while queue is not empty
  node = queue.dequeue()
  for neighbor in graph[node]
    if visited[neighbor]
      continue
    queue.enqueue(neighbor)
    visited[neighbor] = true
    distance[neighbor] = distance[node] +1
```

First we add the root-node to the queue and mark we have visited it, and the distance to the root is 0. after this we begin to handle the nodes in the order as they are in the queue. We will handle a node by going through its neighbors. If we have not visited a neighbor before, we add it to the queue and update the arrays. The search takes *O(n+m)* time, as we handle each node and edge at maximum once.

## Example of a graph: Labyrinth

We are in a labyrinth and we want to get from square *A* to square *B*. With each turn, we can move one step up, down, left or right. Can we get from *A* to *B*, and if we can, what is the shortest possible route? 


We can illustrate the problem as a graph, so that each floor square is a node in our graph and there is an edge between two nodes, if they are next to each other in the labyrinth. In the example below, the shortest path from *A* to *B* is formed with 9 steps. The left side illustrates the labyrinth, and the right side the same situation as a graph.

![Labyrinth](https://github.com/centria/algot-ja-tira/raw/master/src/images/materials/labyrinth.png)  
source: [**Tietorakenteet ja algoritmit**](https://github.com/pllk/tirakirja/raw/master/tirakirja.pdf)

Using this illustration, there is a path from *A* to *B* exactly when the nodes of the corresponding graph are a part of the same component. We can check with DFS, if there is a path from *A* to *B*. The shortest path from *A* to *B* can be found with *BFS*, which starts from *A*.

<Note>
We do not have to separately change the labyrinth into a graph, but we can do the search on implicit graph. This means, that we do the search to the labyrinth in its own presentation form. In practice, the labyrinth is handy to save as a two-dimensional array, which tells which squares are walls. Then we can do for example a DFS like follows:
</Note>

```console
search(y, x)
  if y < 0 or x < 0 or y >= n or x >= n
    return
  if wall[y,x] or visited[y,x]
    return
  visited[y,x] = true
  search(y+1, x)
  search(y-1, x)
  search(y, x+1)
  search(y, x-1)
```

We begin our search from a coordinate *y,x*. Our first check is to determine we keep inside our grid, and the second one to make sure we have not come to a wall or visited the node already. Then we search all the neighboring nodes recursively, in order up, down, right, left. This will find us *some path* from *A* to *B*, but not necessarily the shortest one.


<Note>
Even though in the material we use pseudocode to show functionality of certain algorithms, the exercises should be done with C#.
</Note>

# Exercises


<Note>In exercises 1,2 and 3, the computers can communicate with each other, if there is a connection between them through other computers!</Note>

<Exercise title={'001 Connectivity'}>

A network comprises of *n* computers, which are labeled *1, 2, ..., n*. In the network there is a set of connections, through which information can be sent both ways. Your task is to find out, how with how many computers can a certain computer communicate.

Fill the class **Connectivity** and its methods:
* constructor **Connectivity(int n)**, the amount of computers is given in the constructor.
* **void AddConnection(int a, int b)**, adds a connection between a and b.
* **int Calculate(int x)**, returns the amount of computers with which x can communicate.

Example of the functionality:

```cpp
Connectivity c = new Connectivity(10);
c.AddConnection(1, 2);
c.AddConnection(2, 3);
c.AddConnection(1, 3);
c.AddConnection(5, 4);
c.AddConnection(5, 6);
c.AddConnection(5, 7);
c.AddConnection(7, 8);
c.AddConnection(6, 9);
c.AddConnection(9, 10);
Console.WriteLine(c.Calculate(5)); // 6
```

</Exercise>

<Exercise title={'002 Components'}>

A network comprises of *n* computers, which are labeled *1, 2, ..., n*. In the network there is a set of connections, through which information can be sent both ways. Two computers belong in the *same component*, if they can communicate with each other. Your task is to calculate the amount of components.

<Note>A computer with no connections to other computers can still communicate with itself, forming a component.</Note>

Fill the class **Components** and its methods:
* constructor **Components(int n)**, the amount of computers is given in the constructor.
* **void AddConnection(int a, int b)**, adds a connection between a and b.
* **int Calculate()**, returns the amount of components.


Example code:

```cpp
Components k = new Components(6);
// One connected component
k.AddConnection(1, 2);
k.AddConnection(2, 3);
k.AddConnection(1, 3);
k.AddConnection(3, 4);
// Another connected component
k.AddConnection(5, 6);
Console.WriteLine(k.Calculate()); // 2

Components c = new Components(4);
// Every node is its own connected component
Console.WriteLine(c.Calculate()); // 4
```

<Note>
You might want to create a helper method to find the connected components...
</Note>

</Exercise>

<Exercise title={'003 Communication'}>

A network comprises of *n* computers, which are labeled *1, 2, ..., n*. In the network there is a set of connections, through which information can be sent both ways. You are given pairs of computers and your task is to find out, if they can communicate with one another.

Fill the class **Communication** and its methods:
* contructor **Communication(int n)**, the amount of computers is given to the constructor as a parameter.
* **void AddConnection(int a, int b)**, adds a connection between a and b.
* **bool Examine(int x, int y)**, returns true if there is a connection between x and y, otherwise returns false.

Example functionality:

```cpp
Communication comms = new Communication(6);
comms.AddConnection(1, 2);
comms.AddConnection(2, 3);
comms.AddConnection(1, 3);
comms.AddConnection(3, 4);
comms.AddConnection(5, 6);
Console.WriteLine(comms.Examine(1, 4)); // true
Console.WriteLine(comms.Examine(2, 5)); // false
Console.WriteLine(comms.Examine(5, 6)); // true
```

</Exercise>

<Note>Next exercise is worth double points, 4 in total.</Note>

<Exercise title={'004 Labyrinth'}>

Your task is to find the *shortest path* from *x* to *y* in a labyrinth. The labyrinth is a matrix of *n \* m* size, and is constructed as follows: *#* means a wall, and *.* (dot) means a floor. You can assume that all the tiles on the outside are walls, and there is exactly one *x* and one *y* in the grid.

On a single turn, you can move one step left, right, up or down. You have to give the route of the shortest path as a string, which is made from characters *L*, *R*, *U* and *D* respectively. If there are multiple routes, you can return any of them.

Fill in the class **Labyrinth** with the following method:
* **string Search(char[,] labyrinth)**, returns the description of the shortest path (if there is none, returns empty string).

Example code:

```cpp
Labyrinth l = new Labyrinth();
char[,] c =
{ {'#','#','#','#','#','#','#'},
  {'#','x','#','.','y','.','#'},
  {'#','.','#','.','#','.','#'},
  {'#','.','.','.','.','.','#'},
  {'#','#','#','#','#','#','#'} };
Console.WriteLine(l.Search(c)); // DDRRUUR       

Labyrinth l2 = new Labyrinth();
char[,] c2 =
{ {'#','#','#','#','#','#'},
  {'#','x','#','.','y','#'},
  {'#','#','#','#','#','#'} };
Console.WriteLine(l2.Search(c2)); // empty string 
```

<Note>
For the shortest path, you have to make a breadth-first search (BFS)! 
The DFS from the example might not find the shortest route, as it finds any route...
</Note>

<Note>
You can save the width n and the height m with the following code:

```cpp
int n = laby.GetLength(0);
int m = laby.GetLength(1);
```
</Note>

</Exercise>