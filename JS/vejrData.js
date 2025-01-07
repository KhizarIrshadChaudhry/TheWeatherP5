//Hent vejrdata vha. coordinatererne
let APIkey = '__';
let viserVejret = false;
let fadeInVejret = false;

function vejrAPIKald(lat, long){
    console.log(lat, long)
    dummyData = {
      "coord": {
          "lon": 12.5158,
          "lat": 55.6538
      },
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 280.83,
          "feels_like": 277.21,
          "temp_min": 279.99,
          "temp_max": 281.19,
          "pressure": 1010,
          "humidity": 81,
          "sea_level": 1010,
          "grnd_level": 1008
      },
      "visibility": 10000,
      "wind": {
          "speed": 6.69,
          "deg": 220
      },
      "clouds": {
          "all": 75
      },
      "dt": 1732609925,
      "sys": {
          "type": 2,
          "id": 2091609,
          "country": "DK",
          "sunrise": 1732604807,
          "sunset": 1732632496
      },
      "timezone": 3600,
      "id": 2619528,
      "name": "Hvidovre",
      "cod": 200
    }
  
    window.vejret = dummyData;
    console.log(window.vejret);
    fadeInVejret = true;
  
    /* API FETCHING NÅR PRODUKTET ER KLAR;
    APIkey = 
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}`;
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
          throw new Error('Response ikke OK (200)');  
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        window.vejret = data;
        console.log(window.vejret);
        viserVejret = true;
    })
    .catch(error => {
        console.error('API fetch fejl:', error);
        apiFejl(error);
    });
   */
}


