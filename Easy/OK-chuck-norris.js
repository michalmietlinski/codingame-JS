var MESSAGE = readline();
var temp = '';
for (var i = 0; i < MESSAGE.length; i++) {
    if (MESSAGE.charCodeAt(i).toString(2).length < 7) {
        temp = temp + '0' + MESSAGE.charCodeAt(i).toString(2);
    } else {
        temp = temp + MESSAGE.charCodeAt(i).toString(2);
    }

}

if (temp.length < 7) {
    temp = "0" + temp;
}

var result = "";
for (var i = 0; i < temp.length; i++) {
    if (temp[i] == temp[i - 1]) {
        result = result + 'f';
    } else {
        result = result + temp[i]
    }


}

result = result.replace(/0/g, ' 00 0').replace(/1/g, ' 0 0');
result = result.replace(/f/g, '0');
result = result.substr(1);

print(result);