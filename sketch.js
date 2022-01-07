var song
var fft
let angle = 0;
let r,g,b = 0;
let ready = false;

function preload(){
    song = loadSound('rio.mp3');
}
function setup() { 
    createCanvas(windowWidth, windowHeight, WEBGL);
    fft = new p5.FFT();
    background(175);
  }
  
function draw() {
    if (ready){
        //background(175);
        fft.analyze();
        amp = fft.getEnergy(20,200);
        rectMode(CENTER);
        //noStroke();
        if(amp<82){
            r = random(0,255);
            g = random(0,255);
            b = random(0,255);
            angle+=0.07;
            rotateX(angle);
            rotateY(angle*0.2);
            fill(r,g,b);
        }
        
        rotateX(angle);
        rotateY(angle*0.3);
        box(300,300,300);
        console.log(amp)
        if (amp>239){
            angle+=0.1;
            x = random(0,800);
            r = random(0,255);
            g = random(0,255);
            b = random(0,255);
            fill(r,g,b);
            box(x);  
        }
    }else{
        rectMode(CENTER);
        fill(r,g,b);
        box(300,300,300);
    }
    
    
    
}
  
function mouseClicked(){
    if(song.isPlaying()){
        song.pause();
        noLoop();
    }
    else{
        song.play();
        ready = true;
        loop();
    }
}