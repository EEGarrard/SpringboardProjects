document.addEventListener("DOMContentLoaded", function () {
  const noteContainer = document.getElementById("note-container");
  const newNoteButton = document.getElementById("new-note-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  // TODO: Load the note color from the local storage.
  let noteColor = null; // Stores the selected note color from the form.
  if (localStorage.getItem("note-color")) {
    noteColor = localStorage.getItem("note-color");
  }
  // TODO: Load the note ID counter from the local storage.
  let noteIdCounter = 0; // Counter for assigning unique IDs to new notes.
  if (localStorage.getItem("note-id-counter")) {
    noteIdCounter = parseInt(localStorage.getItem("note-id-counter"));
  }
  // TODO: Load the notes from the local storage.
  let notes = {}; //
  if (localStorage.getItem("notes")) {
    notes = JSON.parse(localStorage.getItem("notes"));

    Object.keys(notes).forEach((id) => {
      addNewNote(id, notes[id].content, notes[id].backgroundColor);
    });
  }

  function addNewNote(id = null, content, color = noteColor) {
    if (!id) {
      id = noteIdCounter;
	 
      noteIdCounter++; // Increments the counter since the ID is used for this note.
    }

    const note = document.createElement("textarea");

    note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
    note.value = content || `${id}`; // Sets the note ID as value.
    note.className = "note"; // Sets a CSS class.
    note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
    noteContainer.appendChild(note); // Appends it to the note container element as its child.

    // TODO: Add new note to the saved notes in the local storage.
    notes[id] = {
      content: note.value,
      backgroundColor: color,
    };
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("note-id-counter", noteIdCounter.toString());
   
  }

  colorForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default event.

    const newColor = colorInput.value.trim(); // Removes whitespaces.

    const notes = document.querySelectorAll(".note");
    for (const note of notes) {
      note.style.backgroundColor = newColor;
    }

    colorInput.value = ""; // Clears the color input field after from submission.

    noteColor = newColor; // Updates the stored note color with the new selection.

    // TODO: Update the note color in the local storage.
    localStorage.setItem("note-color", noteColor);
  });

  newNoteButton.addEventListener("click", function () {
    addNewNote();
  });

  document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("note")) {
		const noteId = event.target.getAttribute("data-note-id");
      event.target.remove(); // Removes the clicked note.
	  

      // TODO: Delete the note from the saved notes in the local storage.
      delete notes[noteId];
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  });

  noteContainer.addEventListener(
    "blur",
    function (event) {
      if (event.target.classList.contains("note")) {
        // TODO: Update the note from the saved notes in the local storage.
        const noteID = event.target.getAttribute("data-note-id");
        const newContent = event.target.value;

        notes[noteID].content = newContent;
        localStorage.setItem("notes", JSON.stringify(notes));
      }
    },
    true
  );

  window.addEventListener("keydown", function (event) {
    /* Ignores key presses made for color and note content inputs. */
    if (event.target.id === "color-input" || event.target.type === "textarea") {
      return;
    }

    /* Adds a new note when the "n" key is pressed. */
    if (event.key === "n" || event.key === "N") {
      addNewNote(); // Adds a new note.
    }
  });
});
