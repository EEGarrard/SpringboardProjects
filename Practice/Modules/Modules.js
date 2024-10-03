var harry = "potter";
var voldemort = "He who must not be named";

function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

// This function will be called when the button is clicked
function handleFight() {
  const result = fight(harry, voldemort);
  document.getElementById('result').textContent = result; // Update the result on the page
  console.log('Button clicked');
}

// Attach the event listener after the DOM is loaded
const button = document.getElementById('fight');
button.addEventListener('click', handleFight);
