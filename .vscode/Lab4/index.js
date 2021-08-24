
let ba = document.getElementById("adk");
let va = document.getElementById("vbk");
let la = document.getElementById("ln");
let lg = document.querySelector(".login");
let ad = document.querySelector(".addbooks");
let vb = document.querySelector(".view-books");

function a() {

    if(ad.style.display === 'none'){
        lg.style.display ='none';
        ad.style.display ='block';
        vb.style.display ='none';
    }
    else{
        ad.style.display ='block';
    }
}

function v() {
    if(vb.style.display === 'none'){
        lg.style.display ='none';
        ad.style.display ='none';
        vb.style.display ='grid';
    } else{
        vb.style.display ='grid';
    }
}

function l(){
    
    if(lg.style.display === 'none'){
        lg.style.display ='block';
        ad.style.display ='none';
        vb.style.display ='none';
    } else{
        lg.style.display ='block';
    }
}
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}