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
function save(text) {
    var count = 0;
    var currentSave;
    var currentSave1;
    var currentSave2;
    var currentSave3;
    var currentSave4;
    if (count == 0) {
        currentSave = text;
        count++;
    } else if (count == 1) {
        currentSave1 = text;
        count++;
    } else if (count == 2) {
        currentSave2 = text;
        count++;
    } else if (count == 3) {
        currentSave3 = text;
        count++;
    } else if (count == 4) {
        currentSave4 = text;
        count++;
    }

    return function undo(newText) {
        var save = "hello";
        if (count <= 1) {
            save = currentSave;
            count--;
        } else if (count == 2) {
            save = currentSave1;
            count--;
        } else if (count == 3) {
            save = currentSave2;
            count--;
        } else if (count == 4) {
            save = currentSave3;
            count--;
        } else if (count == 5) {
            save = currentSave4;
            count--;
        }

        return save;
    }

}




module.exports.eraseText = eraseText;
module.exports.displayCharacterCount = displayCharacterCount;
