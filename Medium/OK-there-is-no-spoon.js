var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis
var line = []
for (var i = 0; i < height; i++) {
    line[i] = readline(); // width characters, each either 0 or .
    //console.log(line)
}

for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {

        if (line[i][j] == "0") {
            var temp1 = null,
                temp2 = null,
                temp3 = null,
                temp4 = null;
            if (line[i + 1]) {

                for (var k = i + 1; k < height; k++) {

                    if (line[k][j] == "0" && !temp1 && !temp2) {
                        temp1 = k;
                        temp2 = j;


                    }

                }

                if (!temp1 && !temp2) {
                    temp1 = -1;
                    temp2 = -1;
                }


            } else {
                temp1 = -1;
                temp2 = -1;

            }
            //  console.log(line[i][j+1])
            if (line[i][j]) {

                for (var k = j + 1; k < width; k++) {

                    if (line[i][k] == "0" && !temp3 && !temp4) {
                        temp3 = i;
                        temp4 = k;


                    }

                }
                if (!temp3 && !temp4) {
                    temp3 = -1;
                    temp4 = -1;

                }

            } else {
                temp3 = -1;
                temp4 = -1;

            }

            print(j + " " + i + " " + temp4 + " " + temp3 + " " + temp2 + " " + temp1);
        }
    }
}