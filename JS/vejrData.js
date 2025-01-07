//Hent vejrdata vha. coordinatererne
let viserVejret = false;
let fadeInVejret = false;

function vejrAPIKald(lat, long){
    console.log(lat, long)
    
    //console.log(window.vejret);
    //fadeInVejret = true;
  
    // API FETCHING NÅR PRODUKTET ER KLAR;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}`;
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
          throw new Error('Response ikke OK (200)');  
        }
        return response.json();
    })
    .then(data => {
        window.vejret = data;
        console.log(window.vejret);
        fadeInVejret = true;
    })
    .catch(error => {
        console.error('API fetch fejl:', error);
        apiFejl(error);
    });
}


