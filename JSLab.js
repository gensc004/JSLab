/**
 * Created by gensc004 on 1/28/14.
 */

function changeBackground(newColor) {

    if(newColor == document.body.style.backgroundColor){
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = newColor;
    }
}

function eraseText() {
    document.getElementById("textArea").value = "";
    }

function displayCharacterCount(){
    var count = "<p>"  + "here" + "</p>";
    document.getElementById("character_count").innerHTML = count;
    }