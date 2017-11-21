var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways
printErr(N+" "+L+"  "+E)
var N1=[],N2=[], EI=[];
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
     N1[i] = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
     N2[i] = parseInt(inputs[1]);
}
printErr(N1)
printErr(N2)
for (var i = 0; i < E; i++) {
     EI[i] = parseInt(readline()); // the index of a gateway node
}
printErr(EI)
// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
   printErr(SI)
   var res;
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    for(var i=0;i<N1.length;i++){
        if((N1[i]==SI&&EI.indexOf(N2[i])!=-1)||(N2[i]==SI&&EI.indexOf(N1[i])!=-1)){
            printErr(i);
        res=N1[i]+" "+N2[i];
        N1[i]="X"
        N2[i]="X"
        break;
            
        }
        
        }
        if(!res){
             for(var i=0;i<N1.length;i++){
            if(EI.indexOf(N1[i])!=-1||EI.indexOf(N2[i])!=-1){
        printErr(i);
        res=N1[i]+" "+N2[i];
        N1[i]="X"
        N2[i]="X"
        break;
        }
        res=(EI-1)+" "+EI;
             }
        }
    

    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    print(res);
}