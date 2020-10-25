'use strict';

function onSetColorTxt(event) {
    //choice color text
    gMeme.lines[gMeme.selectedLineIdx].colorTxt = event;
}

function onSetColorFillTxt(event) {
    //choice color fill text
    gMeme.lines[gMeme.selectedLineIdx].fillTxt = event;
}

function moveTxt(event) {
    //move the text on the meme by mouse move
    return null;
}

function onChangeTxtPos(num) {
    //chane txt pos by button +/- on row
}

function onAddText(value) {
    //add or change text
    addText(value);
}

function onAddNewTxt() {
    //add new txt line on to meme
    return;
}

function onDeleteTxt() {
    //delete txt on to meme
    return;
    deleteTxt();
}

function onSetFontTxt(value) {
    //choice font text
    gMeme.lines[gMeme.selectedLineIdx].fontTxt = value;
}

function onChangeTxtFontSize(num) {
    //chane txt font size by button +/-
    gMeme.lines[gMeme.selectedLineIdx].sizeTxt += num;
}

function onChangeTxtAlign(value) {
    //chane txt align left-right-center
    gMeme.lines[gMeme.selectedLineIdx].align = value;
    console.log('onChangeTxtAlign:', value);
}

function addText(txt) {
    if (gMeme.lines.length < 1) return;
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}