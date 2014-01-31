/**
 * Created by gensc004 on 1/28/14.
 */


function eraseText() {
    document.getElementById("textArea").value = "";
}

function displayCharacterCount(text){
    var count = "<p>" +"Count: "  + text.length + "</p>";
    return count;
}

var saveCounter = 0;
var currentSave;
var currentSave1;
var currentSave2;
var currentSave3;
var currentSave4;

function save(text) {


    if (saveCounter == 0) {
        currentSave = text;
        saveCounter++;
    } else if (saveCounter == 1) {
        currentSave1 = text;
        saveCounter++;
    } else if (saveCounter == 2) {
        currentSave2 = text;
        saveCounter++;
    } else if (saveCounter == 3) {
        currentSave3 = text;
        saveCounter++;
    } else if (saveCounter == 4) {
        currentSave4 = text;
        saveCounter++;
    }

    return function undo(newText) {
        //var save = "hello";
        if (saveCounter == 1) {
            save = currentSave;
            saveCounter--;
        } else if (saveCounter == 2) {
            save = currentSave1;
            saveCounter--;
        } else if (saveCounter == 3) {
            save = currentSave2;
            saveCounter--;
        } else if (saveCounter == 4) {
            save = currentSave3;
            saveCounter--;
        } else if (saveCounter == 5) {
            save = currentSave4;
            saveCounter--;
        }

        return save;
    }

}




module.exports.eraseText = eraseText;
module.exports.displayCharacterCount = displayCharacterCount;
