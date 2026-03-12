let parent = document.getElementsByClassName("parent")[0];
let btnAddNew = document.getElementsByTagName("button")[0];
btnAddNew.addEventListener("click", hamGiDo)

function hamGiDo() {
  let newParagraph = document.createElement("p");
    newParagraph.textContent = "Đây là một đoạn văn mới";
    newParagraph.style.color = "blue";
    parent.appendChild(newParagraph);
  
}