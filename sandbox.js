// Grab elements from the page
const title = document.getElementById("title");
const button = document.getElementById("changeTextBtn");
const box = document.getElementById("box");

// Change the text when the button is clicked
button.addEventListener("click", function () {
  title.textContent = "You clicked the button!";
  console.log("Text changed!");
});

// Change the box color when you hover over it
box.addEventListener("mouseover", function () {
  box.style.background = "yellow";
  console.log("Box color changed!");
});

// Reset the box color when the mouse leaves
box.addEventListener("mouseout", function () {
  box.style.background = "purple";
  console.log("Box color reset!");
});
