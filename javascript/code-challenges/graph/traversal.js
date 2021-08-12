'use strict';

let destinations = 'Metroville,Pandora,Arendelle,New Monstropolis,Naboo,Narnia'.split(',');

const routes = [
  ['Metroville', 'Pandora'],
  ['Arendelle', 'New Monstropolis', 'Naboo'],
  ['Naboo', 'Pandora'],
  ['Narnia', 'Arendelle', 'Naboo']
];

const adjacencyList = new Map();

function addNode(destinations){
  adjacencyList.set(destinations, []);
}
function addEdge(origin, endPoint) {
  adjacencyList.get(origin).push(endPoint);
  adjacencyList.get(endPoint).push(origin);
}

destinations.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);


