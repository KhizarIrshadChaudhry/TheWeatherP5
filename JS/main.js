//FONTS
function preload(){
  font_2P = loadFont("fonts/PressStart2P.ttf");
  font_Robotto = loadFont("fonts/Roboto-Regular.ttf");
}  

let titelY, hastighed, acceleration;
//tilføjet acceleration for at gør mer realistisk


let titelFalder = false; //falder titlen?
let titleOpacity = 1;
let titelFadeaway = false;

let backgroundColor = (163, 163, 163);

let farveSkift = 0;


function setup() {
  horCENTER = windowWidth/2; //hozitale midten
  verCENTER = windowHeight/2; //verticale midten

  //baggrund
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  titleY = windowHeight/6;
  hastighed = 0; //start hastighed
  acceleration = 0.7;

  drawTitel();

  //knappen public declare
  window.btnLokation = createButton("LOKALISER");
  btnLokation.position(windowWidth/4, windowHeight/6.6);
  btnLokation.addClass("btn");
  btnLokation.mousePressed(lokationsPermission);

}


function draw(){
  //visVejret();
  //TITEL FALD
  if(titelFalder){
    background(backgroundColor);  //refresh skræm

    drawTitel();
    hastighed += acceleration;
    titleY += hastighed;

    if (titleY > windowHeight) {
      hastighed *= -0.7; // skift retning og reducer
      if (Math.abs(hastighed) < 2) { // følelsesomhed -  indtil |hastighed| blir "neglitabel"
        titelFalder = false;
        titelFadeaway = true;        
      }
    }    
  }else if(titelFadeaway){
    background(backgroundColor);
    drawTitel();
    titleOpacity -= 0.01;
    if (titleOpacity<0){
      titelFadeaway=false;
      background(backgroundColor);

      vejrAPIKald(coordinates[0], coordinates[1]);
    }
  }else if (fadeInVejret){
    backgroundColor = lerpColor(color(backgroundColor), color(135, 206, 235), farveSkift)
    background(backgroundColor);
    farveSkift+=0.001;
    if (farveSkift>0.1){
      fadeInVejret = false;
      viserVejret=true;
    }
  }else if (viserVejret){
    visVejret();
  }
}
  

function visVejret() {
  let unixTid = window.vejret.dt;
  let datoObj = new Date(unixTid*1000);
  let dato = datoObj.toLocaleDateString();
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }
  let tiden = datoObj.toLocaleTimeString("en-GB", options);
  let sted = window.vejret.name;
  let temp = (window.vejret.main.temp-273.15).toFixed(2);
  let folesSom = (window.vejret.main.feels_like-273.15).toFixed(2);
  let min = (window.vejret.main.temp_min-273.15).toFixed(2);
  let max = (window.vejret.main.temp_max-273.15).toFixed(2);

  background(135, 206, 235)

  //Dato, Sted, Tid
  textAlign(CENTER);
  textFont(font_2P, 54);     
  textStyle(BOLD);
  fill(255, 255, 255);
  text(dato, horCENTER, windowHeight/7);
  textSize(25);
  text(sted, horCENTER, windowHeight/9*1.75)
  textStyle(NORMAL);
  text(tiden, horCENTER, windowHeight/9*2.2);
  textSize(18);
  


  let tempInfoX = windowWidth/2/10;
  let tempInfoY = windowHeight*3/8;
  drawTempratur(temp, folesSom, min, max, tempInfoX, tempInfoY);

  //INDIKATIONSLINJE KODE
  let linjeStartX = windowWidth/3/10; //deler vinduet op i 2, og sætter 10% plads på hver side
  let linjeSlutX = windowWidth/2/10*7.5;
  let linjeY = windowHeight*4.5/8;
  drawIndikationslinje(temp, folesSom, min, max, linjeStartX, linjeSlutX, linjeY);

  let compassX = windowWidth * 0.8; 
  let compassY = windowHeight*3/8+100+60;
  let deg = window.vejret.wind.deg;
  let speed = window.vejret.wind.speed;

  drawCompass(deg+random(-3, 3), speed+random(0, -0.2, 0.2), compassX, compassY, 100);
  
}







function drawTitel(){
  textFont(font_2P, 84);     
  textAlign(CENTER);
  textStyle(BOLD);
  fill("rgba(0, 0, 0,"+titleOpacity+")");
  text("The Weather", horCENTER , titleY);  
}




