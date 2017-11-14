
var container = document.getElementById("container");
//creando elemento h1
var title = document.createElement("h1");
title.textContent = "titulo de la imagen";
container.appendChild(title);

var figure =document.createElement("figure");
container.appendChild(figure);

var image = document.createElement("img");
image.setAttribute("src", "assets/images/boxes.jpg");
image.setAttribute("alt", "cajas");
figure.appendChild(image);

var description = document.createElement("figcaption");
description.textContent = "descripcion de las cajas";
description.style.color ="red";
figure.appendChild(description);


//evento de cambio de imagen

image.addEventListener("click",changeImage )


  function changeImage() {
  image.setAttribute("src", "assets/images/logo.jpg")
}
