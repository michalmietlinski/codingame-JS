var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
tempera = temps.split(" ");
var mine=5000000;
if(n>0){
for(var i=0;i<n;i++){
    
    if(Math.abs(parseInt(tempera[i]))<Math.abs(mine)){
        mine=parseInt(tempera[i]);
        
    }else if(Math.abs(parseInt(tempera[i]))==Math.abs(mine)){
        if(parseInt(tempera[i])>0||mine>0){
        mine=Math.abs(parseInt(tempera[i]));
        }else{
            mine=parseInt(tempera[i]);
        }
    }
   
    
}
}else{
 mine=0;   
}

print(mine);