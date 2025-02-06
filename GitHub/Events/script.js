document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.getElementById("box-container");
  const newBoxButton = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");
  let boxID = null;
  let boxIdCounter = 0;
  let boxColor = "";

  function createBox() {
    boxIdCounter++;
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    boxContainer.appendChild(newBox);
    boxID = boxIdCounter;

    newBox.style.fontWeight = "bold";
    newBox.innerText = boxID;

    newBox.setAttribute("data-box-id", boxID);


    newBox.addEventListener("mouseover", function (e) {
      let rect = this.getBoundingClientRect();
      this.innerText = `x: ${rect.left}, 
        y: ${rect.top}`;
    });

    newBox.addEventListener("mouseout", function (e) {
      this.innerText = newBox.getAttribute("data-box-id")
    });
  }

  newBoxButton.addEventListener("click", function () {
    console.log("clicked box");
    createBox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT") {
        return;
    }
    if (e.key === "n") {
      createBox();
    }
  })

  colorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(colorInput.value);
    boxColor = colorInput.value;
    let boxes = document.getElementsByClassName("box");
    for (box of boxes) {
      box.style.backgroundColor = boxColor;
    }
  });
  // Add event listener for double-clicking a box to remove it
  boxContainer.addEventListener("dblclick", function (e) {
    console.log(e.target);
    if (e.target.className === 'box') {
      e.target.remove();
    }
  });
});
