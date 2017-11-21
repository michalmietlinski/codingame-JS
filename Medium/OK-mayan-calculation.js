var inputs = readline().split(' ');
var L = parseInt(inputs[0]);
var H = parseInt(inputs[1]);
var numeral=[],num1Line=[],num2Line=[],numeral2=[];

var temporar =[];
for (var i = 0; i < H; i++) {
    temporar[i] = readline();
    
    for(var j=0;j<temporar[i].length;j++){
        var temp2 = j/L;
        temp2=Math.floor(temp2);
        if(!numeral[temp2]){
            numeral[temp2]=[]
            }
        if(!numeral2[temp2]){
             numeral2[temp2]=[]   
        }
        if(!numeral2[temp2][i]){
             numeral2[temp2][i]=""  
            }
        if(numeral[temp2]){
        numeral[temp2]=numeral[temp2]+temporar[i][j];
        numeral2[temp2][i]=numeral2[temp2][i]+temporar[i][j];
        }else{
          numeral[temp2]=temporar[i][j]; 
          numeral2[temp2][i]=temporar[i][j];  
        }
        }
}

var S1 = parseInt(readline());

for (var i = 0; i < S1; i++) {
    temporar[i] = readline();
    var temp2=i/H;
    temp2=Math.floor(temp2)
    for(var j=0;j<temporar[i].length;j++){
        // var temp2 = j/L;
        // temp2=Math.floor(temp2);
        if(!num1Line[temp2]){
            num1Line[temp2]=[]
            }
        if(num1Line[temp2]){
        num1Line[temp2]=num1Line[temp2]+temporar[i][j];
        }else{
          num1Line[temp2]=temporar[i][j];  
        }
        }
  
}
var S2 = parseInt(readline());

for (var i = 0; i < S2; i++) {
     temporar[i] = readline();
     var temp2=i/H;
    temp2=Math.floor(temp2)
    for(var j=0;j<temporar[i].length;j++){
        // var temp2 = j/L;
        // temp2=Math.floor(temp2);
        if(!num2Line[temp2]){
            num2Line[temp2]=[]
            }
        if(num2Line[temp2]){
        num2Line[temp2]=num2Line[temp2]+temporar[i][j];
        }else{
          num2Line[temp2]=temporar[i][j];  
        }
        }
    
}
var operation = readline();
function getvalue(values){
   // printErr(values)
    var temp=0;
   // printErr(values)
    for(var i=0;i<values.length;i++){
        
        temp=temp+parseInt(numeral.indexOf(values[i])*Math.pow(20, values.length-1-i))
      //  printErr(temp)
    }
    
    return temp;
}
function getpower(value,power){
 if((value/Math.pow(20,power))>20){
     var temp=getpower(value,power+1);
     return temp;
     
 }else{
     return power;
 }
    
}
function codevalue(value){
    var tempvalue=value;
    var temp=getpower(value,0);
    printErr("power" + temp+"  value"+value)
    
    if(temp>0){
        for(var j=temp;j>=0;j--){
            var tempnum=tempvalue/(Math.pow(20,j))
            if(tempnum<1)tempnum=0;
            tempnum=Math.floor(tempnum);
            printErr(tempnum)
            printnumber(tempnum);
            tempvalue=tempvalue-(tempnum*(Math.pow(20,j)));
        }

        
    }else if(temp===0){
         printnumber(value);
    }
 
        
}
function printnumber(num){
    for(var j=0;j<H;j++){
        print(numeral2[num][j]);
    }
}
var v1=getvalue(num1Line);
var v2=getvalue(num2Line);
printErr(v1+" "+v2)
printErr(operation)
var result;
if(operation=="+"){
    result=v1+v2;  
}
if(operation=="-"){
    result=v1-v2;  
    result=Math.floor(result)
}
if(operation=="*"){
    result=v1*v2;  
}
if(operation=="/"){
    result=v1/v2; 
    result=Math.floor(result)
}
printErr(result)
codevalue(result)
