var N = parseInt(readline());
var W=[];
for (var i = 0; i < N; i++) {
     W[i] = readline();
}
var LETTERS = readline();

var selected={};
selected.val=0;
getval=function(letter){
    switch (letter){
        
        case "d":
            return 2
        break;
          case 'g':
            return 2
        break;
        
          case 'c':
            return 3
        break;
          case 'm':
            return 3
        break;
          case 'p':
            return 3
        break;
          case 'f':
            return 3
        break;
          case 'h':
            return 4
        break;
          case 'v':
            return 4
        break;
          case 'w':
            return 4
        break;
          case 'y':
            return 4
        break;
          case 'k':
            return 5
        break;
          case 'x':
            return 8
        break;
          case 'j':
            return 8
        break;
          case 'q':
            return 10
        break;
          case 'z':
            return 10
        break;
    
    default:
        return 1
        
        }
    
 
     
    
}
for(var i=0;i<W.length;i++){
    var temp=LETTERS.split("");
  
    if(W[i].length<=temp.length){
        var wtemp=W[i].split("");
        
        var sum=0;
        
    for(var j=0;j<wtemp.length;j++){
        tempind=temp.indexOf(wtemp[j]);
            if(tempind!=-1){
                // printErr(temp[tempind]);
             // printErr(getval(temp[tempind]));
              
              sum=sum+getval(temp[tempind]);
              temp[tempind]="!";
              printErr(tempind+" "+sum)
            }else{ 
            printErr(wtemp[j]);
                sum=0;
                break;
            }
           
        }
        printErr(sum)
         if(sum>selected.val){
                printErr(W[i])
             selected.val=sum;
             selected.obj=W[i];
             
            }
    }
}
// Write an action using print()
// To debug: printErr('Debug messages...');

print(selected.obj);