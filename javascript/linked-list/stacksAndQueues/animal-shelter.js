'use strict'; 

class Animal {
  constructor(animal) {
    this.value = animal;
    this.next = null;
 }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  anotherEnqueue(animal) {
    let newAnimal  = new Animal(animal);
    if(!this.rear) {
      this.rear = newAnimal;
      this.front = newAnimal;
    }else{
      this.rear.next = newAnimal;
      this.rear = newAnimal;
    }
  }
  enqueue(animal) {
    if(animal === 'cat' || animal === 'dog') {
      this.anotherEnqueue(animal);
    }else {
      console.log('We only take in cats and dogs');
    }
  }


  anotherDequeue() {
    let temp = this.front;
    if (this.front !== null) {
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
    if(temp.next === null){
      this.front = this.rear;
    }
  }
  dequeue(pref) {
    if(pref === 'cat' || pref === 'dog'){
      return this.anotherDequeue(pref);
    }else{
      return null;
    }
  }
}

module.exports = AnimalShelter, Animal;

