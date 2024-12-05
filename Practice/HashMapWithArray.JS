class simpleMap {
  constructor() {
    this._items = [];
  }

  set(k, v) {
    this._items.push([k, v]);
  }
  get(k) {
    let kv = this._items.find((kv) => k === kv[0]);
    return kv ? kv[1] : undefined;
  }
  has(k) {
    return this._items.find((kv) => k === kv[0]) !== undefined;
  }
  delete(k) {
    let i = this._items.find((kv) => kv === kv[0]);
    if (i !== -1) this.items.splice(i, 1);
  }
  keys() {
    return this._items.map((kv) => kv[0]);
  }
  values() {
    return this._items.map((kv) => kv[1]);
  }
  entries() {
    return this._items;
  }
}

const person = new simpleMap();
person.set("Erin", 33);
person.set("Amy", 39);
console.log(person);
console.log(person.has("Erin"));

function hash(key, ArrayLen) {
  const hash = Array.from(key).reduce(
    (accum, char) => accum + char.charCodeAt(),
    0
  );
  return hash % ArrayLen;
}

console.log(hash("Erin"));

class HashMap {
  constructor() {
    this._items = [];
  }
  set(k, v) {
    const hashedK = hash(k);
    this._items[hashedK] = v;
  }
  get(k) {
    const hashedK = hash(k);
    return this._items[hashedK];
  }
}

const m = new HashMap();
m.set("apple", "red");
console.log(m);
m.set("grape", "green");
console.log(m);

console.log(m.get("grape"));
console.log(hash("grape", 10));
console.log(hash("apple", 10));
m.set("apple", "red");
console.log(m.get("apple"));
console.log(m.get("grape"));