var n = parseInt(readline()); // the number of cards for player 1
var cardp1 =[];
for (var i = 0; i < n; i++) {
    cardp1[i] = valueofsomething(readline()); // the n cards of player 1
}
var m = parseInt(readline()); // the number of cards for player 2
var cardp2 =[];
for (var i = 0; i < m; i++) {
    cardp2[i] = valueofsomething(readline()); // the m cards of player 2
}

// Write an action using print()
// To debug: printErr('Debug messages...');
function valueofsomething(t1){
    
        switch(t1[0]) {
    case "2":
        return 1 ;
        
    case "3":
       return 2;
        
    case "4":
       return 3
        break;
    case "5":
       return 4
        break;
    case "6":
       return 5
        break;
    case "7":
       return 6
        break;
    case "8":
       return 7
        break;
    case "9":
       return 8
        break;
    case "1":
       return 9
        break;
    case "J":
       return 10
        break;
    case "Q":
       return 11
        break;
    case "K":
       return 12
        break;
    case "A":
       return 13
        break;
        
   
}
    
}
// console.log(cardp1)
// console.log(cardp2)
var round=0;
var war=false;
var tempwar=[];



 while(cardp1.length>0&&cardp2.length>0){
     var temp1=null, temp2=null;
     temp1=cardp1.shift();
     temp2=cardp2.shift();
     printErr(temp1+"  "+temp2+"   "+cardp1.length+"   "+cardp2.length)
     //printErr(cardp1.length+"  "+cardp2.length)
    if(temp1>temp2){
        if(war){
             
             cardp1.push.apply(cardp1,tempwar[0]);
             cardp1.push(temp1);
             cardp1.push.apply(cardp1,tempwar[1]);
             cardp1.push(temp2);
        }else{
            cardp1.push(temp1);
            cardp1.push(temp2);
        }
        war=0;
        round++;   
    }else if(temp1<temp2){
        if(war){
            
            cardp2.push.apply(cardp2,tempwar[0]);
            cardp2.push(temp1);
            cardp2.push.apply(cardp2,tempwar[1]);
             cardp2.push(temp2);
        }else{
            cardp2.push(temp1);   
            cardp2.push(temp2);
        }
        war=0;      
        round++;
            
    }else{
        
        if(cardp1.length<3||cardp2.length<3){
            war=1;
            break;}
        if(war){
            
            tempwar[0].push(temp1);
            tempwar[1].push(temp2);
            
                var temps1=cardp1.splice(0,3);
                var temps2=cardp2.splice(0,3);
                // tempwar[0].splice(tempwar[0].length,0,temps1);
                // tempwar[1].splice(tempwar[1].length,0,temps2);
                tempwar[0].push.apply(tempwar[0],temps1);
                tempwar[1].push.apply(tempwar[1],temps2);
                // round++; 
            
        }else{
            war=1;
                        
                 tempwar=[];
                  tempwar[0]=[];
                   tempwar[1]=[];
            tempwar[0].push(temp1);
            tempwar[1].push(temp2);

             var  temps1=cardp1.splice(0,3);
              var   temps2=cardp2.splice(0,3);
                // tempwar[0].splice(tempwar[0].length,0,temps1);
                // tempwar[1].splice(tempwar[1].length,0,temps2);
                tempwar[0].push.apply(tempwar[0],temps1);
                tempwar[1].push.apply(tempwar[1],temps2);
            
            }                        
        }
    }
    
        if(war){
            print('PAT');
            }else{
              
                if(cardp1.length===0&&cardp2.length===0){
                     print('PAT');
                }else  if(cardp1.length===0){
                   print("2 "+round);
                   }else{
                print("1 "+round);
                   }
                
                }