const planets = [
  { name: "Mercury", temperature: 440, distance: 0.39 },
  { name: "Venus", temperature: 737, distance: 0.72 },
  { name: "Earth", temperature: 288, distance: 1 },
  { name: "Mars", temperature: 253, distance: 1.5 },
  { name: "Jupiter", temperature: 163, distance: 5.2 },
  { name: "Saturn", temperature: 133, distance: 9.58 },
  { name: "Uranus", temperature: 78, distance: 19.22 },
  { name: "Neptune", temperature: 73, distance: 30.05 },
];

function habitability(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const habitable = habitability(planets, function (planet) {
  return (
    planet.temperature <= 323 &&
    planet.temperature >= 253 &&
    planet.distance <= 1.5 &&
    planet.distance >= 0.75
  );
});
console.log(habitable);
