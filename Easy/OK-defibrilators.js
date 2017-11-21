var LON = readline();
var LAT = readline();
LON = parseFloat(LON.replace(',','.'));
LAT = parseFloat(LAT.replace(',','.'));
var N = parseFloat(readline());
var def={name:'',dist:200000000};
for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    var temp = DEFIB.split(";");
    var LA=parseFloat(temp[5].replace(',','.'))
    var LO=parseFloat(temp[4].replace(',','.'))
    var x=(LO-LON)*Math.cos((LAT+LA)/2);
    var y=LA-LAT;
    var d=Math.sqrt((x*x)+(y*y))*6371;
    
    if(def.dist>d){
     def.name = temp[1];
     def.dist=d;
    }
}
var resp = def.name.split(' ');


// Write an action using print()
// To debug: printErr('Debug messages...');

print(def.name);