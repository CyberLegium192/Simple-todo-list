const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function task() {
  if (inputBox.value === "") {
    alert("isi kontol jangan ngelunjak")
  }else{
    let li = document.createElement("li");
    li.innerHTML = `

      <i class="fa-regular fa-circle"></i>
      <i class="fa-regular fa-circle-check"></i>
      ${inputBox.value}

    `
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = `<i class="fa-solid fa-x"></i>`
    li.appendChild(span)
  }
  inputBox.value = "";
  saveData()
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("active")
    saveData()
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }
}, false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}
function showData(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showData()