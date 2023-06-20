// JavaScript Window Object

function ObjAlert() {
  alert("Hello World");
}
function ObjConfirm() {
  let result = confirm("Are you sure");
  document.write(result);
}

function ObjPrompt() {
  let result = prompt("Enter your name");
  document.write(result);
}

function ObjOpen() {
  open();
}

function ObjClose() {
  close();
}

setTimeout(() => {
  alert("After 5 seconds");
}, 10000);
