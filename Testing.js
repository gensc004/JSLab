/**
 * Created by gensc004 on 1/28/14.
 */
var assert = require("assert");
var displayCharacterCount = require('./JSLab').displayCharacterCount;
var saveSetup = require('./JSLab').saveSetup;
var highlightSearch = require('./JSLab').highlightSearch;
var saveObject = saveSetup();

describe('Character Count', function(){
    describe('test 1', function(){
        it('Displays the character count of a given string', function(){
            assert.equal(displayCharacterCount("green"), "<p>Count: 5</p>");
        })
    });


});


describe('Save/Undo/Redo Testing', function(){
    describe('save test 1', function(){
        it('Testing save button, should put text into undoArray and undo should return the string', function(){
            saveObject.beginSave('test');
            assert.equal('test', saveObject.undo('testjhasdh'));
        })
    })
    describe('save test 2', function(){
        it('Testing save button, should put text into undoArray and undo should return the string and put it into redo', function(){
            saveObject.beginSave('test');
            assert.equal('test', saveObject.undo('test'));
            assert.equal('test', saveObject.redo('test'));
        })
    })
    describe('save test 3', function(){
        it('Tests undo button, text should be removed after undo is called', function(){

            assert.equal(null,saveObject.undo('test'));
            assert.equal();
        })
    })
});
