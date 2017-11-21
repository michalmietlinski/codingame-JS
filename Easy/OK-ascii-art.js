var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();
var ROW = [];

 //var alphabet = readline();
for (var i = 0; i < H; i++) {
     var temp = readline();
     ROW[i]=[];
    
     for(var j=0; j < (temp.length/L); j++){
        
          ROW[i].push(temp.substr((j*L),L))
       //  console.log((j*L)+'g  '+ temp.substr((j*L),L)+' '+L)
         }
   // var new = ROW[i].splice(,L)
   // console.log(ROW[i])
}
var g=T.split('');

for (var j=0; j < g.length; j++){
  
    switch(T[j].toUpperCase()) {
    case 'A':
        g[j]=0
        break;
        case 'B':
        g[j]=1
        break;
        case 'C':
        g[j]=2
        break;
        case 'D':
        g[j]=3
        break;
        case 'E':
        g[j]=4;
        break;
        case 'F':
        g[j]=5;
        break;
        case 'G':
        g[j]=6;
        break;
        case 'H':
        g[j]=7;
        break;
        case 'I':
        g[j]=8;
        break;
        case 'J':
        g[j]=9;
        break;
        case 'K':
        g[j]=10;
        break;
        case 'L':
        g[j]=11;
        break;
        case 'M':
        g[j]=12;
        break;
        case 'N':
        g[j]=13;
        break;
        case 'O':
        g[j]=14;
        break;
        case 'P':
        g[j]=15;
        break;
         case 'Q':
        g[j]=16;
        break;
        case 'R':
        g[j]=17;
        break;
        case 'S':
        g[j]=18;
        break;
        case 'T':
        g[j]=19;
        break;
        case 'U':
        g[j]=20;
        break;
         case 'V':
        g[j]="21";
        break;
        case 'W':
        g[j]="22";
        break;
        case 'X':
        g[j]="23";
        break;
        case 'Y':
        g[j]="24";
        break;
        case 'Z':
        g[j]="25";
        break;
        default:
        g[j]=26;
        break;
        
}
  // console.log(g[j])
}

 
for (var i = 0; i < H; i++) {
    var answer ='';
    
    for (var j=0; j < g.length; j++){
        
        answer = answer+ROW[i][g[j]]
    }
    print(answer);
}