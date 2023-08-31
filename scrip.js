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

  var opcion11 = 'MUL/navegacion/opcion1/1.png';
  var opcion12 = 'MUL/navegacion/opcion1/2.png';
  var opcion13 = 'MUL/navegacion/opcion1/3.png';
  var opcion14 = 'MUL/navegacion/opcion1/4.png';
  var opcion15 = 'MUL/navegacion/opcion1/5.png';
  var opcion16 = 'MUL/navegacion/opcion1/6.png';
  var opcion17 = 'MUL/navegacion/opcion1/7.png';
  var opcion18 = 'MUL/navegacion/opcion1/8.png';

  var opcion21 = 'MUL/navegacion/opcion2/1.png';
  var opcion22 = 'MUL/navegacion/opcion2/2.png';
  var opcion23 = 'MUL/navegacion/opcion2/3.png';
  var opcion24 = 'MUL/navegacion/opcion2/4.png';
  var opcion25 = 'MUL/navegacion/opcion2/5.png';
  var opcion26 = 'MUL/navegacion/opcion2/6.png';
  var opcion27 = 'MUL/navegacion/opcion2/7.png';
  var opcion28 = 'MUL/navegacion/opcion2/8.png';

  var opcion31 = 'MUL/navegacion/opcion3/1.png';
  var opcion32 = 'MUL/navegacion/opcion3/2.png';
  var opcion33 = 'MUL/navegacion/opcion3/3.png';
  var opcion34 = 'MUL/navegacion/opcion3/4.png';
  var opcion35 = 'MUL/navegacion/opcion3/5.png';
  var opcion36 = 'MUL/navegacion/opcion3/6.png';
  var opcion37 = 'MUL/navegacion/opcion3/7.png';
  var opcion38 = 'MUL/navegacion/opcion3/8.png';

  var opcion41 = 'MUL/navegacion/opcion4/1.png';
  var opcion42 = 'MUL/navegacion/opcion4/2.png';
  var opcion43 = 'MUL/navegacion/opcion4/3.png';
  var opcion44 = 'MUL/navegacion/opcion4/4.png';
  var opcion45 = 'MUL/navegacion/opcion4/5.png';
  var opcion46 = 'MUL/navegacion/opcion4/6.png';
  var opcion47 = 'MUL/navegacion/opcion4/7.png';
  var opcion48 = 'MUL/navegacion/opcion4/8.png';

  var opcion51 = 'MUL/navegacion/opcion5/1.png';
  var opcion52 = 'MUL/navegacion/opcion5/2.png';
  var opcion53 = 'MUL/navegacion/opcion5/3.png';
  var opcion54 = 'MUL/navegacion/opcion5/4.png';
  var opcion55 = 'MUL/navegacion/opcion5/5.png';
  var opcion56 = 'MUL/navegacion/opcion5/6.png';
  var opcion57 = 'MUL/navegacion/opcion5/7.png';
  var opcion58 = 'MUL/navegacion/opcion5/8.png';

  var opcion61 = 'MUL/navegacion/opcion6/1.png';
  var opcion62 = 'MUL/navegacion/opcion6/2.png';
  var opcion63 = 'MUL/navegacion/opcion6/3.png';
  var opcion64 = 'MUL/navegacion/opcion6/4.png';
  var opcion65 = 'MUL/navegacion/opcion6/5.png';
  var opcion66 = 'MUL/navegacion/opcion6/6.png';
  var opcion67 = 'MUL/navegacion/opcion6/7.png';
  var opcion68 = 'MUL/navegacion/opcion6/8.png';

  var opcion71 = 'MUL/navegacion/opcion7/1.png';
  var opcion72 = 'MUL/navegacion/opcion7/2.png';
  var opcion73 = 'MUL/navegacion/opcion7/3.png';
  var opcion74 = 'MUL/navegacion/opcion7/4.png';
  var opcion75 = 'MUL/navegacion/opcion7/5.png';
  var opcion76 = 'MUL/navegacion/opcion6/6.png';
  var opcion77 = 'MUL/navegacion/opcion7/7.png';
  var opcion78 = 'MUL/navegacion/opcion7/8.png';

  var opcion81 = 'MUL/navegacion/opcion8/1.png';
  var opcion82 = 'MUL/navegacion/opcion8/2.png';
  var opcion83 = 'MUL/navegacion/opcion8/3.png';
  var opcion84 = 'MUL/navegacion/opcion8/4.png';
  var opcion85 = 'MUL/navegacion/opcion8/5.png';
  var opcion86 = 'MUL/navegacion/opcion8/6.png';
  var opcion87 = 'MUL/navegacion/opcion8/7.png';
  var opcion88 = 'MUL/navegacion/opcion8/8.png';
  
  switch (idImg) {
    case 1:
      
      imagen1.src = opcion11;
      imagen2.src = opcion12;
      imagen3.src = opcion13;
      imagen4.src = opcion14;
      imagen5.src = opcion15;
      imagen6.src = opcion16;
      imagen7.src = opcion17;
      imagen8.src = opcion18;

      imagen1.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen2.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen3.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen4.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen5.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen6.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen7.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen8.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay1);
      
      break;
    case 2:
      imagen1.src = opcion28;
      imagen2.src = opcion21;
      imagen3.src = opcion22;
      imagen4.src = opcion23;
      imagen5.src = opcion24;
      imagen6.src = opcion25;
      imagen7.src = opcion26;
      imagen8.src = opcion27;

      imagen2.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen3.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen4.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen5.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen6.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen7.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen8.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen1.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay2);

      break;

    case 3:

    imagen1.src = opcion37;
    imagen2.src = opcion38;
    imagen3.src = opcion31;
    imagen4.src = opcion32;
    imagen5.src = opcion33;
    imagen6.src = opcion34;
    imagen7.src = opcion35;
    imagen8.src = opcion36;

      imagen3.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen4.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen5.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen6.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen7.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen8.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen1.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen2.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay3);

      break;
    
    case 4:

    imagen1.src = opcion46;
    imagen2.src = opcion47;
    imagen3.src = opcion48;
    imagen4.src = opcion41;
    imagen5.src = opcion42;
    imagen6.src = opcion43;
    imagen7.src = opcion44;
    imagen8.src = opcion45;
    
      imagen4.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen5.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen6.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen7.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen8.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen1.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen2.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen3.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay4);
      break;

    case 5:

      imagen1.src = opcion55;
      imagen2.src = opcion56;
      imagen3.src = opcion57;
      imagen4.src = opcion58;
      imagen5.src = opcion51;
      imagen6.src = opcion52;
      imagen7.src = opcion53;
      imagen8.src = opcion54;

      imagen5.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen6.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen7.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen8.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen1.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen2.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen3.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen4.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay5);
      break;
        
    case 6:

      imagen1.src = opcion64;
      imagen2.src = opcion65;
      imagen3.src = opcion66;
      imagen4.src = opcion67;
      imagen5.src = opcion68;
      imagen6.src = opcion61;
      imagen7.src = opcion62;
      imagen8.src = opcion63;

      imagen6.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen7.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen8.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen1.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen2.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen3.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen4.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen5.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay6);
      break;

    case 7:

      imagen1.src = opcion73;
      imagen2.src = opcion74;
      imagen3.src = opcion75;
      imagen4.src = opcion76;
      imagen5.src = opcion77;
      imagen6.src = opcion78;
      imagen7.src = opcion71;
      imagen8.src = opcion72;
    
      imagen7.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen8.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen1.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen2.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen3.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen4.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen5.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen6.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay7);
    break;

    case 8:
      imagen1.src = opcion82;
      imagen2.src = opcion83;
      imagen3.src = opcion84;
      imagen4.src = opcion85;
      imagen5.src = opcion86;
      imagen6.src = opcion87;
      imagen7.src = opcion88;
      imagen8.src = opcion81;


      imagen8.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen1.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen2.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen3.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen4.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen5.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen6.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen7.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay8);
    break;
    default:
      imagen1.src = opcion11;
      imagen2.src = opcion12;
      imagen3.src = opcion13;
      imagen4.src = opcion14;
      imagen5.src = opcion15;
      imagen6.src = opcion16;
      imagen7.src = opcion17;
      imagen8.src = opcion18;

      imagen1.style.transform = "rotate(271deg) translate(200px) rotate(-271deg)";
      imagen2.style.transform = "rotate(316deg) translate(200px) rotate(-316deg)";
      imagen3.style.transform = "rotate(1deg) translate(200px) rotate(-1deg)";
      imagen4.style.transform = "rotate(46deg) translate(200px) rotate(-46deg)";
      imagen5.style.transform = "rotate(91deg) translate(200px) rotate(-91deg)";
      imagen6.style.transform = "rotate(136deg) translate(200px) rotate(-136deg)";
      imagen7.style.transform = "rotate(181deg) translate(200px) rotate(-181deg)";
      imagen8.style.transform = "rotate(226deg) translate(200px) rotate(-226deg)";
      loadNewImgClick(videoDay0);
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