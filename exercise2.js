//input "hello world!"
//output
//"!dlrow olleh"

function balikString(kata){
    length = kata.length;

    var balikString = '';

    for (i = length; i >= 0; i--) {
        balikString += kata.charAt(i);
    }

    return balikString;
}
    console.log(balikString('hello world!'));