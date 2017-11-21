var inputs = readline().split(' ');
var L = parseInt(inputs[0]);
var C = parseInt(inputs[1]);
var row=[];
var pos={};
var breaker=false;
var currentdir="S";
var dirs=["S","E","N","W"];
var invdirs=["W","N","E","S"];
var moves=0;
var allmoves=[];
var prevdir;
var inverter=false;
var start=true;
for (var i = 0; i < L; i++) {
     row[i] = readline();
     printErr(row[i]);
     if(row[i].indexOf("@")!=-1){
         pos.x=row[i].indexOf("@");
         pos.y=i;
     }
}
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function checkfield(dir){
     var temp
    if(dir=="S"){
        temp=row[pos.y+1][pos.x];
        
        }
    if(dir=="E"){
         temp=row[pos.y][pos.x+1];
        }
    if(dir=="N"){
        temp=row[pos.y-1][pos.x];
        }
    if(dir=="W"){
        temp=row[pos.y][pos.x-1];
        }
        return temp;
    
}
function changedir(){
    
    if(!prevdir){
    prevdir=true;
    if(!inverter){
         currentdir="S";
     }else{
         
         currentdir="W";
     }
    }else{
     if(!inverter){
         currentdir=dirs[dirs.indexOf(currentdir)+1];
     }else{
         currentdir=dirs[dirs.indexOf(currentdir)-1];
         
     }
        
    }
        // printErr(inverter+"  "+currentdir)
    
}

function checkmove(){
    var temp= checkfield(currentdir);
    if(temp=="#"){
        changedir();
        checkmove();
    }else if(temp=="X"){
        // printErr(breaker)
        if(!breaker){
            changedir(); 
        }else{
            move();
        }
    } else{
        prevdir=false;
     move();
    }
    
    
}
function printmove(){
    if(currentdir=="S"){
        allmoves.push("SOUTH");
        pos.y++;
    }
     if(currentdir=="N"){
         allmoves.push("NORTH");
        pos.y--;
    }
     if(currentdir=="E"){
         allmoves.push("EAST");
        pos.x++;
    }
     if(currentdir=="W"){
         allmoves.push("WEST");
        pos.x--;
    }

}
function destroyblock(posy,posx){
    printErr(row[posy][posx]);
     row[posy][posx]="A";
}
function reactto(){
 if(row[pos.y][pos.x]=="$"){
 start=false;
 }
 if(row[pos.y][pos.x]=="X"){
    
    row[pos.y]= row[pos.y].substr(0, pos.x) + " "+  row[pos.y].substr(pos.x +1);
     for(var j=0;j<row.length;j++){
         printErr(row[j]);
     
     }
 }
  if(row[pos.y][pos.x]=="S"){
 currentdir="S";
 }
 if(row[pos.y][pos.x]=="N"){
 currentdir="N";
 }
 if(row[pos.y][pos.x]=="W"){
 currentdir="W";
 }
 if(row[pos.y][pos.x]=="E"){
 currentdir="E";
 }
 if(row[pos.y][pos.x]=="B"){
        // printErr('Breaker'+breaker)
        breaker=!breaker;
        }
if(row[pos.y][pos.x]=="T"){  
    for(var i=0;i<row.length;i++){
     if(row[i].indexOf("T")!=-1&&(row[i].indexOf("T")!=pos.x||i!=pos.y)){      
      pos.x=row[i].indexOf("T");
      pos.y=i;
      break;
 } } }
 
 if(row[pos.y][pos.x]=="I"){
            inverter=!inverter;
            
 }
 
}
function move(){
    moves++;
    
    printmove();
    reactto()
    
}

while(start){
    if(moves>400){
        //printErr(moves)
    start=false;
    
    }else{
        checkmove()
    }
    
}
printErr(moves)
if(moves>400){
        //printErr(moves)
    print("LOOP")
    
    }else{
       for(var i=0;i<allmoves.length;i++){
       print(allmoves[i])
       }
    }