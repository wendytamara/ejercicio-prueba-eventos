window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var nameList = document.getElementById('name-list');
var button = document.getElementById('button-id');

function createList(event) {
  event.target.classList.toggle('display-none'); //  si tiene la display-none se le quita y si no lo tienen se le agrega
  form.classList.toggle('display-none');
}

function begin() {

  addList.addEventListener('click', createList)
  button.addEventListener("click", show)


function show(event) {

  if (nameList.value) {
    form.classList.toggle("display-none");
  event.preventDefault();
  var parrafo = document.createElement("p");
 form.parentElement.insertBefore(parrafo, form);
  parrafo.textContent = nameList.value;

  }
  link.addEventListener("click",function(event){
  event.preventDefault();
  link.classList.toggle("display-none");
     var textarea = document.createElement("textarea");
     var button = document.createElement("button");
     button.textContent = "Añadir"

     var div = document.createElement("div");
     div.appendChild(textarea);
     div.appendChild(button);

  form.parentElement.insertBefore(div,link);
  link.addEventListener("click",function(event){
  event.preventDefault();
  link.classList.toggle("display-none");
     var textarea = document.createElement("textarea");
     var button = document.createElement("button");
     button.textContent = "Añadir"

     var div = document.createElement("div");
     div.appendChild(textarea);
     div.appendChild(button);

  form.parentElement.insertBefore(div,link);

} }


taskBtn.addEventListener("click", agregarTarea)

function agregarTarea(){

if (nameTask.value) {
  var newContent = document.createElement("p");

  nameTask.value = newContent.textContent;
  newContent.parentElement.insertBefore("newContent",form )

}

}

}
