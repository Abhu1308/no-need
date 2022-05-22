function preload() {
   classifier=ml5.imageClassifier('DoodleNet');
}

function setup() {
   canvas=createCanvas(300,300);
   canvas.position(585,330);
   canvas.mouseReleased(n);
}

function draw() {
   strokeWeight(10);
   stroke("black");
   if(mouseIsPressed) {
      line(pmouseX,pmouseY,mouseX,mouseY);
   }
}

function n() {
   classifier.classify(canvas,gotResult);
}

function gotResult(error,results) {
   if(error) {
      console.log(error);
   }
   else {
      console.log(results);
      document.getElementById("span_1").innerHTML=results[0].label;
      document.getElementById("span_2").innerHTML=results[0].confidence;
   }
}