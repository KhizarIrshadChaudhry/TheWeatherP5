function drawTempratur(temp, folesSom, min, max, x, y){
    push();
        translate(x, y);
        textAlign(LEFT);
        fill(255, 255, 255);
        text("Tempratur",-4, 0);
        text("Føles som",0, 30);
        text("Koldeste",0, 60);
        text("Varmeste",0, 90);
        
        fill("#000080");
        text((temp)+"\u00B0", x*5, 0);
        fill(255, 255, 255);
        text((folesSom)+"\u00B0", x*5, 30);
        fill(186,242,239)
        text((min)+"\u00B0", x*5, 60);
        fill(242,125,12)
        text((max)+"\u00B0", x*5, 90);
    pop();
}


function drawIndikationslinje(temp, folesSom, min, max, linjeStartX, linjeSlutX, linjeY){
    push();
        //mapper position relativ til min- og maxtemp
        let tempX = map(temp, min, max, linjeStartX, linjeSlutX)+random(-2, 2);
        temp = temp+random(-0.2, 2).toFixed(0);
        let folesSomX = map(folesSom, min, max, linjeStartX, linjeSlutX)

        // mange små linjer for at lave gradientfarveskift til linje
        strokeWeight(30);
        textAlign(CENTER);
        for (let i = 0; i < (linjeSlutX - linjeStartX); i++) {
            // inter går fra 0 til 1
            let inter = map(i, 0, (linjeSlutX - linjeStartX), 0, 1);
            // kold til varmt
            let c = lerpColor(color(186,242,239), color(242,125,12), inter);
            stroke(c);

            line(linjeStartX + i, linjeY, linjeStartX + i, linjeY);
        }

        noStroke();
        textSize(14)
        fill(186,242,239)
        text(min+"\u00B0",linjeStartX, linjeY+35);
        fill(242,125,12)
        text(max+"\u00B0", linjeSlutX, linjeY+35);
        fill(255,255,255)
        text(folesSom+"\u00B0", folesSomX, linjeY-20);

        fill("#000080")
        text(temp+"\u00B0", tempX, linjeY-20);

        //linje indikationer 
        strokeWeight(3);
        stroke(0);
        line(folesSomX, linjeY-15, folesSomX, linjeY+15);
        stroke("#000080");
        line(tempX, linjeY-15, tempX, linjeY+15);
    pop();
}