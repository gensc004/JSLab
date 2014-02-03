/**
 * Created by gensc004 on 1/28/14.
 */
var assert = require("assert");
var displayCharacterCount = require('./JSLab').displayCharacterCount;
var beginSave = require('./JSLab').beginSave;
var save = require('./JSLab').save;
var undo = require('./JSLab').undo;
var redo = require('./JSLab').redo;
var highlightSearch = require('./JSLab').highlightSearch;

describe('Character Count', function(){
    describe('test 1', function(){
        it('Displays the character count of a given string', function(){
            assert.equal(displayCharacterCount("green"), "<p>Count: 5</p>");
        })
    });


});


