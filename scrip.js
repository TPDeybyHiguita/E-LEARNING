/*V2*/


function activeActionOne(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionOne(newId_a_1, newId_a_2, id_a);

}

function activeFuncionOne(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionOne('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}


function activeActionTwo(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionTwo(newId_a_1, newId_a_2, id_a);

}

function activeFuncionTwo(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionTwo('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}

function activeActionThree(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionThree(newId_a_1, newId_a_2, id_a);

}

function activeFuncionThree(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionThree('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}

function activeActionFour(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionFour(newId_a_1, newId_a_2, id_a);

}

function activeFuncionFour(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionThree('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}

function activeActionFive(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionFive(newId_a_1, newId_a_2, id_a);

}

function activeFuncionFive(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionThree('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}


function activeActionSix(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionSix(newId_a_1, newId_a_2, id_a);

}

function activeFuncionSix(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionThree('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}


function activeActionSeven(id_a, id_img) {
  var label_a = document.getElementById(id_a);
  var img = document.getElementById(id_img);
  img.classList.remove("imgNotAvailable");
  var btnAction = document.getElementById(id_a);  
  var currentOnclick = btnAction.getAttribute("onclick"); // Obtenemos el atributo onclick actual del enlace
  var numberid_a = separarCadena(id_a);
  var id = parseInt(numberid_a[2]) + 1;
  var newId_a_1 = "btnAction" + id;
  var newId_a_2 = "imgAction" + id;
  console.log(newId_a_1);

    if (currentOnclick.includes("Blockarbotones(event)")) {// Verificamos si el evento activeAction está presente en el onclick
      // Removemos el evento activeAction del onclick
      var newOnclick = currentOnclick.replace("Blockarbotones(event)");

      // Actualizamos el atributo onclick del enlace
      btnAction.setAttribute("onclick", newOnclick);      
    }
    activeFuncionSeven(newId_a_1, newId_a_2, id_a);

}

function activeFuncionSeven(id_a, id_img, idActive){
  var btnAction = document.getElementById(idActive);
  var newOnclick = "activeActionThree('"+id_a+"','"+id_img+"')";
  btnAction.setAttribute("onclick", newOnclick);
}





function separarCadena(cadena) {
  var arraySeparado = cadena.split("n");
  return arraySeparado;
}






// 2. Configura y crea el reproductor de video
var player;
var videoElement = document.getElementById("img-robots-press");

function rotation(idImg)
{ 
  var imagen1 = document.getElementById('img1');
  var imagen2 = document.getElementById('img2');
  var imagen3 = document.getElementById('img3');
  var imagen4 = document.getElementById('img4');
  var imagen5 = document.getElementById('img5');
  var imagen6 = document.getElementById('img6');
  var imagen7 = document.getElementById('img7');
  var imagen8 = document.getElementById('img8');
   
  var videoDay0 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay1 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay2 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay3 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay4 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay5=  'MUL/navegacion/fondos/Holograma.png';
  var videoDay6 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay7 = 'MUL/navegacion/fondos/Holograma.png';
  var videoDay8 = 'MUL/navegacion/fondos/Holograma.png';
  

  switch (idImg) {
    case 1:
      imagen1.src = '';
      imagen1.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen2.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen3.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen4.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen5.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen6.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen7.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen8.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay1);
      
      break;
    case 2:
      imagen2.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen3.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen4.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen5.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen6.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen7.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen8.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen1.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay2);

      break;

    case 3:
      imagen3.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen4.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen5.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen6.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen7.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen8.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen1.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen2.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay3);

      break;
    
    case 4:
      imagen4.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen5.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen6.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen7.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen8.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen1.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen2.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen3.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay4);
      break;

    case 5:
      imagen5.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen6.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen7.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen8.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen1.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen2.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen3.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen4.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay5);
      break;
        
    case 6:
      imagen6.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen7.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen8.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen1.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen2.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen3.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen4.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen5.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay6);
      break;

    case 7:
      imagen7.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen8.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen1.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen2.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen3.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen4.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen5.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen6.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay7);
    break;

    case 8:
      imagen8.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen1.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen2.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen3.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen4.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen5.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen6.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen7.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay8);
    break;
    default:
      imagen1.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen2.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen3.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen4.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen5.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen6.style.transform = "rotate(139deg) translate(200px) rotate(-139deg)";
      imagen7.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen8.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay0);
      changeBackground("bodyImg","../BCR/MUL/gifpuente.gif");
      noviewPage("containerOne");
      noviewPage("containerTwo");
      noviewPage("containerThree")
      noviewPage("containerFour");
      noviewPage("containerFive");
      noviewPage("containerSix");
      noviewPage("containerSeven");
      break;
  }

}

function loadNewImgClick(img) {
  var div = document.getElementById('containerOne');
  var contDiv =   '<div id="rowContainerOne">' +
                  '<img src="MUL/navegacion/btn1.png" alt="" class="img-robots-btn1">' +
                  '<img src="MUL/navegacion/btn2.png" alt="" class="img-robots-btn2">' +
                  '<img src="MUL/navegacion/btn2.png" alt="" class="img-robots-btn2">' +
                  '</div>';
  div.innerHTML = contDiv;
}


function viewPage(id) {
  var div = document.getElementById(id);
  if (div.style.display === "none") {
    // Si el display es "none", cambiarlo a "block"
    div.style.display = "flex";
  }
} 

function noviewPage(id) {
  var div = document.getElementById(id);
  div.style.display = "none";

} 

// Esperar a que se cargue el documento
document.addEventListener("DOMContentLoaded", function () {
  // Obtener una referencia al modal
  const modal = new bootstrap.Modal(document.getElementById("modalVideo"));

  // Mostrar el modal automáticamente
  modal.show();
});

function openModal(id){
  const modal = new bootstrap.Modal(document.getElementById(id));

  // Mostrar el modal automáticamente
  modal.show();
}

function closeModal(id) {
  alert(id)
  const modal = new bootstrap.Modal(document.getElementById(id));

  // Cerrar el modal
  modal.hide();
}



function Blockarbotones(event) {
  event.preventDefault();
}


function pausarOReanudarVideo() {
  if (player.getPlayerState() === 1) {
    // Si el video está en reproducción, pausarlo
    player.pauseVideo();
  } else {
    // Si el video está pausado o en otro estado, reanudarlo
    player.playVideo();

  }
}

function changeBackground(id, urlImg) {
  var myDiv = document.getElementById(id);
  myDiv.style.backgroundImage = "url('"+urlImg+"')";
}