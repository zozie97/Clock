

/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 


function draw_clock(hour, minute, second, millis, alarm){

  background(0);
  noStroke();

  //translate(width/2, height/2);
 

  if(hour >= 7 && hour <= 11){
    background(153, 202, 255); //light blue 
  }
  else if(hour > 11 && hour < 16){
    background(204, 230, 255); //lighter blue
  }
  else if(hour>=16 && hour <= 17){
    background(153, 202, 255); //light blue
  }
  else if(hour >= 18 && hour < 21){
    background(128, 159, 255); //blue
  }
  else if(hour >= 21 && hour <= 23){
    background(0, 19, 77); //dark blue
  }
  else if(hour > 23 && hour < 3){
    background(0); //black
  }
  else if(hour >= 3 && hour < 5){
    background(0, 19, 77); //darkblue
  }
  else if(hour >= 5 && hour < 7){
    background(128, 159, 255); // blue
  }

  //code from the lectures helped me complete my alarm
 // is alarm going off in next 15 seconds
  if (alarm > 0) {
    
    fill(255);
    textFont('Ancient Geek');
    text("Alarm On", 10, 480);
    
  }
  if (alarm == 0){

  if(second % 2 == 0){
    background(255);
  }
 
 
}

star();
   

  //hours - Sun
  var hourRotationSmooth = map(hour, 0, 23, 0, width);
  fill(255, 255, 102);
  ellipse(hourRotationSmooth, 80, 150);
  

  
  //minutes - Mars
  var minuteRotationSmooth = map(minute, 0, 60, 0, width);
  fill(155, 0, 0);
  ellipse(minuteRotationSmooth, 200, 60);
  


  //seconds - Moon
  var secondRotationSmooth = map(second, 0, 60, 0, width);
  fill(200);
  ellipse(secondRotationSmooth, 290, 40);

  //call Earth function
  Earth();
  
  //clock in Earth
  fill(255);
  textSize(25);
  //textFont('Fantasy');
  textFont('Trajanus Roman');
  text(hour + ":" + minute + ":" + second, 430, 410);



}

function Earth (x, y, radius, radius){
  x = 480;
  y = 400;
  radius = 130;

  fill(2, 96, 99);
  ellipse(x, y, radius, radius);

}

function star (x, y){
  //southern cross
  x = 150;
  y = 300;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 150;
  y = 450;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 100;
  y = 350;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 200;
  y = 350;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  //random star
  x = 500;
  y = 200;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  //random star
  x = 100;
  y = 150;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  //random star
  x = 250;
  y = 50;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  //cancer consetlation

  x = 700;
  y = 260;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 750;
  y = 340;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 775;
  y = 390;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 700;
  y = 450;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

  x = 850;
  y = 480;

  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 20);

}