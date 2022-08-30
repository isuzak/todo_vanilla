import { isDeleteExpression } from "typescript";
import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // Create div tag
  const div = document.createElement("div");
  div.className = "list-row";

  // Create li tag
  const li = document.createElement("li");
  li.innerText = inputText;

  // Create button tag
  // completeButton
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // delete parent div tag
    deleteFromIncompleteList(completeButton.parentNode);
    // Create complete-list tag
    const addTarget = completeButton.parentNode;
    // get todo content text
    const text = addTarget.firstElementChild.innerText;
    // Initialize div tag
    addTarget.textContent = null;
    // create li tag
    const li = document.createElement("li");
    li.innerText = text;
    // create backButton
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // append child elements
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // create HTML
    document.getElementById("complete-list").appendChild(addTarget);

  });

  // deleteButton
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // delete parent div tag
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div append child elements
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // Create HTML tag
  document.getElementById("incomplete-list").appendChild(div);

  // delete from incomplete list
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  }

};

document.getElementById("add-button").addEventListener("click", ()=> onClickAdd());