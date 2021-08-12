'use strict';


const Graph = require('../graph/graph.js');
const graphBFS = require('./graphBFS.js');

describe('testing graph implementatations', () => {

  it('testing addVertex method', () => {
    let graph = new Graph();
    const a = graph.addVertex('A');
    console.log(graph.adjacencyList);
    expect(a).toBeTruthy;
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
  it('testing breadth first traversal', () => {
    let graph = new Graph();

    let a = graph.addVertex('A');
    let b = graph.addVertex('B');
    let c = graph.addVertex('C');
    let d = graph.addVertex('D');

    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(c, d);
    graph.addDirectedEdge(d, a);

    console.log('breadthFirst', graph.breadthFirst(a));
    expect(graph.breadthFirst(a));
  });

});
