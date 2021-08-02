'use strict';


const Graph = require('../graph/graph.js');


describe('testing graph implementatations', () => {

  it('testing addVertex method', () => {
    let graph = new Graph();
    const a = graph.addVertex('A');
    console.log(graph.adjacencyList);
    expect(a).toBeTruthy;
  });

  it('testing undirected edge', () => {
    let graph = new Graph();

    let a = graph.addVertex('A');
    let b = graph.addVertex('B');
    let c = graph.addVertex('C');
    let d = graph.addVertex('D');

    graph.addEdgeUndirected(a ,b);
    graph.addEdgeUndirected(a ,c);
    graph.addEdgeUndirected(c ,d);
    graph.addEdgeUndirected(d ,b);

    console.log(graph.breadthFirst('A'));

  });

  
  it('testing directed edge', () => {
    let graph = new Graph();

    let a = graph.addVertex('A');
    let b = graph.addVertex('B');
    let c = graph.addVertex('C');
    let d = graph.addVertex('D');

    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(c, d);
    graph.addDirectedEdge(d, a);

    console.log(graph.adjacencyList);
  });

});
