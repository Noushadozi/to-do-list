let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  count += 1;
  const myInputValue = document.getElementById("input-value").value;
  const parent = document.getElementById("content-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
     <td>${count}</td>
     <td>${myInputValue}</td>
     <td>
     <button class="btn btn-danger deletebtn">delete</button>
     <button class="btn btn-primary donebtn">Done </button>
     </td>
     `;
  parent.appendChild(tr);
  document.getElementById("input-value").value = "";

  const deleteButtons = document.querySelectorAll(".deletebtn");
  for(const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }
  const doneButtons = document.querySelectorAll(".donebtn");
  for(const doneButton of doneButtons) {
    doneButton.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.textDecoration = "line-through";
    });
  }
});

document.getElementById("clear-btn").addEventListener("click", function (e) {
  e.target.parentNode.style.display = "none";
});
// document.getElementById("clear-btn").addEventListener("click", function (e) {
//   e.target.parentNode.style.display = "none";
// });
// document.getElementById("clear-btn").addEventListener("click", function (e) {
//   e.target.parentNode.style.display = "none";
// });
