while (true) {
    var fire=0;
    var target;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        if(mountainH > fire){
            fire=mountainH;
            target=i;
        }
    }

    print(target); // The index of the mountain to fire on.
}