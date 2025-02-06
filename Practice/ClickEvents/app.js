function makeBody(color) {
  document.body.style.backgroundColor = color;
}
function makeBodyPink() {
    makeBody("pink");
}

const btn = document.querySelector("#teal");
btn.onclick = function () {
  makeBody("teal");
};

document.querySelector("#aquamarine").addEventListener("click", function () {
    makeBody("aquamarine");
});


