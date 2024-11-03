const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", function () {
  alert("Bubbling the outer element");
});
middle.addEventListener("click", function () {
  alert("Bubbling of the middle element");
});
inner.addEventListener("click", function () {
  alert("Bubbling the inner element");
});

outer.addEventListener("click", function () {
  console.log("Capturing the outer element");
});
middle.addEventListener("click", function () {
  console.log("Capturing the middle element");
});
inner.addEventListener("click", function () {
  console.log("Capturing the inner element");
});
