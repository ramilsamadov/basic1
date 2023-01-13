 try{
  var div=document.querySelector("#container");
  function renkayarla(){
    var renksec=document.querySelector("#renksec").value;
    if(renksec !="color"){
      div.style.backgroundColor=renksec;
    }
  }
}
catch(fmistake){
    document.write(fmistake)
}
