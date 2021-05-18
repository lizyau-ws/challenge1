// ENVIRONMENT: MARS PHOTOS//
  var marsSlider = document.querySelector('.changeAngle');
  var images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'g.jpg', 'h.jpg'];
  var i = 0;
  
  function prev(){
    if(i <= 0) i = images.length;	
    i--;
    return setImg();			 
  }
  
  function next(){
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();			 
  }
  
  function setImg(){
    return marsSlider.setAttribute('src', "images/"+ images[i]);
  }

//TOP: CURRENT DATE//
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

//PARAMETER: ETA//

var countDownDate = new Date("Aug 25, 2021 11:33:04").getTime();

// Update count down 
var x = setInterval(function() {

// Today's date and time
var now = new Date().getTime();
    
var distance = countDownDate - now;
    
// Calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// Result
  document.getElementById("eta").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";  
}, 1000);

//TAB TABLE// 
function dataInfo(evt, infoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();


  // SUPPLIES: FOOD//
  
  var food = 4;

  function ateKroket() {
    var delFood = document.getElementById("kroket");
    delFood.remove();
    checkfood()
  }

  function ateCake() {
    var delFood = document.getElementById("cake");
    delFood.remove();
    checkfood()
  }

  function atePizza() {
    var delFood = document.getElementById("pizza");
    delFood.remove();
    checkfood()
  }

  function ateSushi() {
    var delFood = document.getElementById("sushi");
    delFood.remove();
    checkfood()
  }

  function checkfood() {
    food--;
     if (food === 0) {
       document.getElementById("starving").style.display = "block";
     }
    }

  //CONVERTER//

  function accConverter(valNum) {
    document.getElementById("outputG").innerHTML=valNum*0.00230590849439274;
  }

  // SPEED CONTROL//

  function increaseSpeed(){
    var value = parseInt(document.getElementById("speedNum").value, 10);
    value = value + 50;
    document.getElementById("speedNum").value = value;
}

function reduceSpeed(){
    var value = parseInt(document.getElementById("speedNum").value, 10);
    value = value - 50;
    document.getElementById("speedNum").value = value;
    if (document.getElementById("speedNum").value <= 0 ){
      alert ("Speed can't go further slower!");
    }
}



