// Get the elements
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const box = document.getElementById("box");
let paragraphAdded = false;

// Add a paragraph when the "Add Paragraph" button is clicked
addBtn.addEventListener("click", function () {
  if (!paragraphAdded) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph!";
    newParagraph.id = "new-paragraph"; // Add an ID for styling
    document.body.appendChild(newParagraph);
    paragraphAdded = true; // Prevent adding more than one paragraph
  }
});

// Remove the paragraph when the "Remove Paragraph" button is clicked
removeBtn.addEventListener("click", function () {
  const paragraph = document.getElementById("new-paragraph");
  if (paragraph) {
    document.body.removeChild(paragraph);
    paragraphAdded = false; // Allow adding it again
  }
});

// Change the box color when you click anywhere on the page
document.body.addEventListener("click", function () {
  box.style.backgroundColor = "yellow";
});
