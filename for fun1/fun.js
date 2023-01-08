window.onkeydown= function daire(event){
    var daire=document.querySelector("div");
    var sol=daire.offsetLeft;
    var yuxari=daire.offsetTop;
    var kod = event.keyCode;

    if(kod==37){
        daire.style.left=(sol-5)+"px";
        daire.style.backgroundColor="red"
    }
    if(kod==38){
        daire.style.top=(yuxari-5)+"px";
        daire.style.backgroundColor="green"
    }
    if(kod==39){
        daire.style.left=(sol+5)+"px";
        daire.style.backgroundColor="yellow"
    }
    if(kod==40){
        daire.style.top=(yuxari+5)+"px";
        daire.style.backgroundColor="pink"
    }
   
}