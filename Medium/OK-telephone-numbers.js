var N = parseInt(readline());
var telephone=[];
var graph=[];
var result=0;
for (var i = 0; i < N; i++) {
   
     telephone[i] = readline();
   //   printErr(telephone[i])
     for(var j=1;j<=telephone[i].length;j++){
         var temp=telephone[i].slice(0,j);
          printErr(temp)
        if(graph[temp]=="f"){
            printErr("now!")
          
        }else{
             printErr(temp)
             
            graph[temp]="f";
           
            result++;
        }
     }
}
// var result = graph.length;
// Write an action using print()
// To debug: printErr('Debug messages...');


// The number of elements (referencing a number) stored in the structure.
print(result);