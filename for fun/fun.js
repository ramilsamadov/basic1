function WhichButton(event){
    var x = event.clientX;
    var y = event.clientY;
    document.querySelector("div").innerHTML="X: "+x+"<br>Y: "+y;
}
