/**
 * Created by gensc004 on 1/28/14.
 */

var undoArray = new Array();
var redoArray = new Array();
var undoCount = 0;
var redoCount = 0;

function eraseText() {
    document.getElementById("textArea").value = "";
}

function displayCharacterCount(text){
    var count = "<p>" +"Count: "  + text.length + "</p>";
    return count;
}

function beginSave(text) {
    undoArray[undoCount] = save(text);
    undoCount++;
}
function save(text) {
var save = text;
    return function () {
        return save;
    }

}

function undo(text) {

    var string = undoArray[undoCount - 1];
    if (text == string()) {
        redoArray[redoCount] = undoArray[undoCount - 1];
        undoCount--;
        redoCount++;
        return undoArray[undoCount - 1]();


    } else {

        return string();

    }

}

function redo(text) {
    var string = redoArray[redoCount - 1];
    undoArray[undoCount] = redoArray[redoCount - 1];
    redoCount--;
    undoCount++;
    return string();
}




module.exports.eraseText = eraseText;
module.exports.displayCharacterCount = displayCharacterCount;
