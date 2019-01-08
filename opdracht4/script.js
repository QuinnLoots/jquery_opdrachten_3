let hoogte = 10;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(20, 20, 150, hoogte);
ctx.stroke();

$( "#increaseHeight" ).click(function() {
    hoogte=hoogte+10;
    if (hoogte>=100){
        hoogte=10;
    }
    ctx.clearRect(0,0, c.width, c.height); 
    ctx.beginPath();
    ctx.rect(20, 20, 150, hoogte);
    ctx.stroke();
    
});

$( "#changecolor" ).click(function() {
    ctx.clearRect(0,0, c.width, c.height); 
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.rect(20, 20, 150, hoogte);
    ctx.stroke();
    
});

$( "#resetcolor" ).click(function() {
    ctx.clearRect(0,0, c.width, c.height); 
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.rect(20, 20, 150, hoogte);
    ctx.stroke();
    
});


$( "#hiderectangle" ).click(function() {
    ctx.clearRect(0,0, c.width, c.height);
    
});

$( "#showrectangle" ).click(function() {
    ctx.stroke();
    
});