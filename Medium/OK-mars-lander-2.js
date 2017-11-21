var surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
var landX=[];
var landY=[];
var result=[];
var min,maks;
for (var i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    landX[i] = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    landY[i] = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}
for(var i=0;i<landX.length;i++){
        if(landY[i]==landY[i+1]){
            if(!min){min=i}
            result[i]=landY[i];
            
            }else{
                if(!maks&&min){maks=i}
            }
    }


// game loop
while (true) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    var hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    var vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    var fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    var rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    var power = parseInt(inputs[6]); // the thrust power (0 to 4).
    var nextrot, nextpower;
    
        if(Math.abs(vSpeed)>35||(Math.abs(hSpeed)>20)){
        nextpower=4;
    }else{
        nextpower=3;
        }
        if(vSpeed>5){
            nextpower=3;
        }
        printErr((X+hSpeed*((Y-result[min])/Math.abs(vSpeed)))>landX[maks]||hSpeed>20)
        printErr((X+hSpeed*((Y-result[min])/Math.abs(vSpeed)))<landX[min]||hSpeed<-20)
    if(X<landX[maks]){
    if((X+hSpeed*((Y-result[min])/Math.abs(vSpeed)))<landX[min]||hSpeed<-20){
        nextrot=-50;
        if(Y-result[min]<10){
            nextrot=0
            nextpower=4}
            
        }else if((X+hSpeed*((Y-result[min])/Math.abs(vSpeed)))>landX[maks]||hSpeed>20){
        nextrot=30;
        if(Y-result[min]<10){
            nextrot=0
             nextpower=4}
        }else{
            if(hSpeed<-20){
                nextrot=-30;
                }
                 if(hSpeed>20){
                nextrot=30;
                }
            
         nextrot=0;   
         printErr(nextpower)
        }
        
    }
if(X>landX[maks]){
    if((X+hSpeed*((Y-result[min])/Math.abs(vSpeed)))<landX[min]||hSpeed<-20){
        nextrot=-40;
        if(Y-result[min]<10){
            nextrot=0
            nextpower=4}
            
        }else if((X+hSpeed*((Y-result[min])/Math.abs(vSpeed)))>landX[maks]||hSpeed>20){
        nextrot=30;
        if(Y-result[min]<10){
            nextrot=0
             nextpower=4}
        }else{
            if(hSpeed<-20){
                nextrot=-20;
                }
                 if(hSpeed>20){
                nextrot=20;
                }
            
         nextrot=0;   
         printErr(nextrot)
        }
        
    }        
        
        
        
    
    
        

       
    
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // rotate power. rotate is the desired rotation angle. power is the desired thrust power.
    print(nextrot+" "+nextpower);
}