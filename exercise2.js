//input "hello world!"
//output
//"!dlrow olleh"

/* function balikString(kata){
    length = kata.length;

    var balikString = '';

    for (i = length; i >= 0; i--) {
        balikString += kata.charAt(i);
    }

    return balikString;
}
    console.log(balikString('hello world!'));
    */


function balikString(kata) {
    var i = '';
    for (var j = kata.length - 1; j >= 0; j--) {
        i = i + kata[j];
    }

    return i;
}

console.log(balikString('hello world!'));