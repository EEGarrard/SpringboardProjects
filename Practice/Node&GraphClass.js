class PersonNode {
  constructor(name, adjacent = new Set()) {
    this.name = name;
    this.adjacent = adjacent;
  }
}

class FriendGraph {
  constructor() {
    this.nodes = new Set();
  }
  addPerson(node) {
    this.nodes.add(node);
  }
  addPeople(peopleList) {
    for (let node of peopleList) {
      this.addPerson(node);
    }
  }
  setFriends(person1, person2) {
    person1.adjacent.add(person2);
    person2.adjacent.add(person1);
  }
  areConnectedBFS(person1, person2) {
    let toVisitQueue = [person1];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      console.log("DFS VISITING:" + current.name);
      if (current === person2) {
        return true;
      }
      for (let neighbor of current.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
  }
  areConnectedDFS(person1, person2) {
    let toVisitStack = [person1];
    let seen = new Set(toVisitStack);
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      console.log("BFS VISITING:" + current.name);
      if (current === person2) {
        return true;
      }
      for (let neighbor of current.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
  areConnectedRecursive(person1, person2, seen = new Set([person1])) {
    if (person1 === person2) {
      return true;
    }
    for (let neighbor of person1.adjacent) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        
        if (this.areConnectedBFS(neighbor, person1, seen)) {
          return true;
        };
      }

    }
  }
}
const homer = new PersonNode("homer simpson");
const marge = new PersonNode("marge simpson");
const maggie = new PersonNode("maggie simpson");
const lisa = new PersonNode("lisa simpson");
const grampa = new PersonNode("grampa");
// homer.adjacent.push(marge);
// homer.adjacent.push(maggie);
// homer.adjacent.push(lisa);
// marge.adjacent.push(homer);
// marge.adjacent.push(maggie);
// maggie.adjacent.push(homer);
// maggie.adjacent.push(marge);
// maggie.adjacent.push(lisa);
// lisa.adjacent.push(homer);
// lisa.adjacent.push(maggie);
// lisa.adjacent.push(grampa);
// grampa.adjacent.push(lisa);

const friends = new FriendGraph();

friends.addPeople([homer, marge, maggie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, maggie);
friends.setFriends(homer, lisa);
friends.setFriends(marge, maggie);
friends.setFriends(maggie, lisa);
friends.setFriends(lisa, grampa);
// console.log(friends);
// console.log(lisa);

const moe = new PersonNode("moe");
const barney = new PersonNode("barney");
const lenny = new PersonNode("lenny");

friends.addPeople([moe, barney, lenny]);

friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);

// console.log(barney);
// friends.areConnectedBFS(homer, marge);

// friends.areConnectedDFS(homer, marge);

// friends.areConnectedBFS(homer, moe);

// friends.areConnectedDFS(homer, moe);

console.log(friends.areConnectedRecursive(homer, marge)); 
console.log(friends.areConnectedBFS(homer, marge));
console.log(friends.areConnectedDFS(homer, marge));