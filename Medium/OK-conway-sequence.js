var R = parseInt(readline());
var L = parseInt(readline());
var table=[R];

var overtemp=false;
for(var i=1;i<25;i++){
    
  var temp=[];
 
   if((typeof table[i-1])== "string"){
        temp=table[i-1].split(" ");
         
   }
   else{
        temp[0]=table[i-1];   
        
   }
   table[i]=""
    for(var j=0;j<temp.length;j++){
       if(typeof temp[j] !== "undefined"&&temp[j]!=""){
        if(temp[j]!=temp[j+1]){
            if(overtemp.val){
            table[i]=table[i]+overtemp.num+" "+overtemp.val+" "
            overtemp=false;
            }else{
             table[i]=table[i]+"1 "+temp[j]+" ";
            }
            
          
        }else{
            
            if(overtemp===false){
                overtemp={};
                overtemp.num=2;
            }else{
             overtemp.num++;
            
            }
            overtemp.val=temp[j];
            
            
        }
       }
        
    }
    
   // console.log(table[i])
}
var result;
    if(L>1){
    result=table[L-1].slice(0, -1);
}else{
    result=table[L-1];
}
// Write an action using print()
// To debug: printErr('Debug messages...');

print(result);