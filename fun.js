try{
    window.onclick= function WhichButton(event){
        var div=document.querySelector("div");
        var x=event.clientX;
        var y=event.clientY;
        div.style.left=x+"px";
        div.style.top=y+"px";

    }
  

}
catch(sikilmis){
    document.write(sikilmis)
}