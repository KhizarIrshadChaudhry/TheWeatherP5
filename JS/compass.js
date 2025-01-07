function drawCompass(deg, speed, cx, cy, radius = 50) {
  push();
  //gi en effect af vindretning skift
    translate(cx, cy);
    frameRate(5); 
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(5);
    ellipse(0, 0, radius * 2, radius * 2);

    textAlign(CENTER, CENTER);
    textSize(18);
    noStroke();
    fill(0, 0, 0, 150);
    text("N", 0, -radius * 1.15);
    text("E", radius * 1.15, 0);
    text("S", 0,  radius * 1.15);
    text("W", -radius * 1.15, 0);

    push();
      rotate(radians(deg - 90)); //minus 90 fordi 0 grader er øst normalt

      stroke(255, 0, 0);
      strokeWeight(3);
      line(0, 0, radius - 10, 0);

      fill(255, 0, 0);
      noStroke();
      triangle(radius - 10, 0, radius - 20, -5, radius - 20, 5);


      if (deg > 180) { //hvis pilen er omvendt fiks
        rotate(radians(180));
        textSize(14);
        textAlign(CENTER, BOTTOM);
        fill("#000080");
        text(`${speed.toFixed(1)} m/s`, -radius * 0.5, -5);
      } else {
        textSize(14);
        textAlign(CENTER, BOTTOM);
        fill("#000080");
        text(`${speed.toFixed(1)} m/s`, radius * 0.5, -5);
      }
    pop(); //for at sætte tingene + rotation til default igen



    
    fill(255, 255, 255); 
    textSize(23);
    text("Vind", 0, -radius-90)
    textSize(14)
    text(`Retning: ${deg.toFixed(0)}°`, 0, -radius - 60);
    text(`Fart: ${speed.toFixed(1)} m/s`, 0, -radius - 40);


  pop();
}
