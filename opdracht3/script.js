let aantalguesses = 0;
let random = Math.floor(Math.random() * 99) + 1;

$( "#guess" ).click(function() {
  aantalguesses++;
  let guessvalue = $( "#value" ).val();
  if(random==guessvalue){
    alert("juist, aantal keer geraden: " + aantalguesses);
    
  }else if(random<guessvalue){
    alert("minder");
  }else{
  alert("meer");
  }
  
});