const p = document.querySelector("p");
p.addEventListener("click", function (e) {
  console.log("coordinates: " + e.pageX + "," + e.pageY);
});
document.addEventListener("keydown", function (e) {
  console.log("Key down: " + e.key);
});

document.querySelector("input").addEventListener("keypressed", function (e) {
  console.log("Key pressed: " + e.key);
});

// const unfriendbuttons = document.querySelectorAll("li button");
const form = document.querySelector("#add-friend");
const input = document.querySelector("#first-name");
const friendList = document.querySelector('#friend-list');

// for (let btn of unfriendbuttons) {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Unfriended");
//     e.target.parentElement.remove();
//   });
// }

friendList.addEventListener("click", function (e) {
    console.log(e.target); 
    console.log(e.target.tagName);
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle('best-friend')
        const heart = document.createElement('span')
        heart.innerHTML = '&hearts;';
        e.target.prepend(heart);
    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
  console.log(input.value);
  const newFriend = document.createElement("li");
  const removeBtn = document.createElement("button");
  newFriend.innerText = input.value;
  removeBtn.innerText = "Unfriend";

  input.value = '';

  friendList.appendChild(newFriend);
  newFriend.appendChild(removeBtn);
});
