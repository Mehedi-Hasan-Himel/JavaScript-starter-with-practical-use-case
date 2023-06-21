function AddItem() {
  let itemValue = document.getElementById("MyInput").value;

  let listItem = document.createElement("li");
  listItem.innerText = itemValue;

  let MyItem = document.getElementById("MyItems");
  MyItem.appendChild(listItem);
}
