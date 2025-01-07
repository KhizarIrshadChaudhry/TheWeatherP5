let coordinates;


//---------HENT LOKATION---------
function lokationsPermission() {
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(hentLokation, lokationsFejl);
    } else {
      return "geolokation virker ik";
    }
  }

function hentLokation(position) {
    titelFalder = true;
    btnLokation.remove();

    coordinates = [position.coords.latitude, position.coords.longitude];
    console.log("Koordinater:"+coordinates);
}


//https://openweathermap.org/current