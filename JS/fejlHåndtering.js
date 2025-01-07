//--------------------------------
//FEJL HÅNDTERING
//-------------------------------------------
function lokationsFejl(fejl){
    switch (fejl.code){
      default:
        titelFalder = false;
        textFont(font_2P, 48);     
        textAlign(CENTER);
        textStyle(BOLD);
        fill(255,0,0);
        text("Lokationsfejl:\n"+fejl.code, horCENTER , verCENTER);
    }
  
  }
  
function apiFejl(fejl){
  switch (fejl.code){
    default:
      titelFalder = false;
      textFont(font_2P, 48);     
      textAlign(CENTER);
      textStyle(BOLD);
      fill(255,0,0);
      text("API fejl:\n"+fejl.code, horCENTER , verCENTER);
  }
}