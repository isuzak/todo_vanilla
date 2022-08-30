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
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  })
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // div append child elements
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // Create HTML tag
  document.getElementById("incomplete-list").appendChild(div);

};

document.getElementById("add-button").addEventListener("click", ()=> onClickAdd());