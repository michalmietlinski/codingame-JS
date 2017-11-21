var n = parseInt(readline());
var inputs = readline().split(' ');
var v=[]
var min=0;
var largest=0;
var max=0;
var diff=0;
for (var i = 0; i < n; i++) {
     v[i] = parseInt(inputs[i]);
     if(v[i]>v[largest]){
     largest=i;
     }
     if(i!=largest){
    
        if((v[largest]-v[i])>diff){
        min=i;
        max=largest;
        diff=v[largest]-v[i];
        }
        }
    
}

if(diff!==0){
    result=-diff;
}else{
    result=0;
}
//console.log(v[min])

// Write an action using print()
// To debug: printErr('Debug messages...');

print(result);