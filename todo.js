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
});

document.getElementById("clear-btn").addEventListener("click", function (e) {
  e.target.parentNode.style.display = "none";
});
{/* <div ><i class="fa-regular fa-square-check"></i></div> */}