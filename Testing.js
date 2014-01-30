/**
 * Created by gensc004 on 1/28/14.
 */
var assert = require("assert");
var eraseText = require('./JSLab').eraseText;
var displayCharacterCount = require('./JSLab').displayCharacterCount;


describe('Character Count', function(){
    describe('test 1', function(){
        it('Displays the character count of a given string', function(){
            assert.equal(displayCharacterCount("green"), "<p>Count: 5</p>");
        })
    });


});


