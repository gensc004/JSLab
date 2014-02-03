/**
 * Created by gensc004 on 1/28/14.
 */




function displayCharacterCount(text){
    var count = "<p>" +"Count: "  + text.length + "</p>";
    return count;
}

function saveSetup() {
var undoArray = new Array();
var redoArray = new Array();
var undoCount = 0;
var redoCount = 0;
return  {
 beginSave: function beginSave(text) {
    undoArray[undoCount] = this.save(text);
    undoCount++;
},
 save: function save(text) {
var save = text;
    return function () {
        return save;
    }

},

 undo: function undo (text) {

    var string = undoArray[undoCount - 1];
    if (text == string()) {
        redoArray[redoCount] = undoArray[undoCount - 1];
        undoCount--;
        redoCount++;
        return undoArray[undoCount - 1]();


    } else {

        return string();
    }

},

redo: function redo (text) {
    var string = redoArray[redoCount - 1];
    undoArray[undoCount] = redoArray[redoCount - 1];
    redoCount--;
    undoCount++;
    return string();
}
}
}

function highlightSearch(text, toFind) {

    var re = new RegExp(toFind, 'g');
    return "<p>" + text.replace(re, "<em>" + toFind + "</em>" ) + "</p>";
}




module.exports.displayCharacterCount = displayCharacterCount;
module.exports.beginSave = beginSave;
module.exports.save = save;
module.exports.undo = undo;
module.exports.redo = redo;
module.exports.highlightSearch = highlightSearch;

