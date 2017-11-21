var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var actualX = initialTX, actualY = initialTY;
// game loop
while (true) {
    
    var dirX ="none",dirY="none";
    var temp;
   
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    if(lightX > actualX){
        dirX="E"
        actualX++;
    }else if(lightX < actualX){
        dirX="W";
        actualX--;
    }else{}
    if(lightY > actualY){
        dirY="S"
        actualY++;
    }else if(lightY < actualY){
        dirY="N";
         actualY--
    }else{
        }
        
    
    if(dirX!="none"&&dirY!="none"){
        temp = dirY+dirX;
}else if(dirX!="none"){
    temp=dirX
    
}else{
    
 temp = dirY;   
}

    print(temp);
}