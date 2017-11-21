var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var file = [];
var res = [];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    file[i] = {}
    file[i].EXT = inputs[0].toLowerCase(); // file extension
    file[i].MT = inputs[1]; // MIME type.

}
for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var temp = FNAME.split(".");
    temp = temp[temp.length - 1].toLowerCase();
    var f = 0;

    for (var j = 0; j < file.length; j++) {
        if (file[j].EXT == temp && (FNAME[FNAME.length - 1] != ".") && FNAME.indexOf(".") != -1) {
            // console.log(file[j].MT)
            res[i] = file[j].MT;
            f = 1;
            break;


        }
    }
    if (f === 0) {
        res[i] = "UNKNOWN";
    }

    print(res[i]);
}