var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.
var LINE = [];
for (var i = 0; i < H; i++) {
    LINE[i] = readline();
    LINE[i] = LINE[i].split(" ") // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
}
var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).
var final = {};
// game loop
while (true) {
    var inputs = readline().split(' ');
    var XI = parseInt(inputs[0]);
    var YI = parseInt(inputs[1]);
    var POS = inputs[2];
    // console.log();
    //console.log(POS)
    if (LINE[YI][XI] == 3 && POS == "TOP") {
        final.x = XI;
        final.y = YI + 1
    }
    if (LINE[YI][XI] == 2) {
        if (POS == "LEFT") {
            final.x = XI + 1;
            final.y = YI
        } else {
            final.x = XI - 1;
            final.y = YI
        }
    }
    if (LINE[YI][XI] == 4) {
        if (POS == "TOP") {
            final.x = XI - 1;
            final.y = YI
        } else {
            final.x = XI;
            final.y = YI + 1
        }
    }
    if (LINE[YI][XI] == 5) {
        if (POS == "TOP") {
            final.x = XI + 1;
            final.y = YI
        } else {
            final.x = XI;
            final.y = YI + 1
        }
    }
    if (LINE[YI][XI] == 6) { //To do
        if (POS == "LEFT") {
            final.x = XI + 1;
            final.y = YI
        } else {
            final.x = XI - 1;
            final.y = YI
        }
    }
    if (LINE[YI][XI] == 7) {
        final.x = XI;
        final.y = YI + 1;
    }
    if (LINE[YI][XI] == 8) {
        final.x = XI;
        final.y = YI + 1;
    }
    if (LINE[YI][XI] == 9) {
        final.x = XI;
        final.y = YI + 1;
    }
    if (LINE[YI][XI] == 10) {
        final.x = XI - 1;
        final.y = YI;
    }
    if (LINE[YI][XI] == 11) {
        final.x = XI + 1;
        final.y = YI;
    }
    if (LINE[YI][XI] == 12) {
        final.x = XI;
        final.y = YI + 1;
    }
    if (LINE[YI][XI] == 13) {
        final.x = XI;
        final.y = YI + 1;
    }
    if (LINE[YI][XI] == 1) {
        final.x = XI;
        final.y = YI + 1;
    }
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
    print(final.x + " " + final.y);
}