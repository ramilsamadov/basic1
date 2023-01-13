 try{
  var div=document.querySelector("#container");
  function renkayarla(){
    var renksec=document.querySelector("#renksec").value;
    if(renksec !="color"){
      div.style.backgroundColor=renksec;
    }
  }
  setInterval(() => {
    let date= new Date()
    let clock = document.getElementById('clock')
    clock.innerHTML =
    date.getHours()+" : "+
    date.getMinutes ()+" : "+
    date.getSeconds();
    }, 1000);

  
  
}
catch(fmistake){
    document.write(fmistake)
}
