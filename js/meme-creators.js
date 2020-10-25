'use strict';
var gCanvas;
var gCtx;
var gIdx = 0;

function openEditor() {
    var elContainer = document.querySelector('.main-container');
    elContainer.classList.add('hide-mode');
}

function setCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth // show width & height in CSS
    gCanvas.height = elContainer.offsetHeight
}

function createMeme(imgId) {
    setCanvas();
    resizeCanvas();
    var img = new Image();
    img.src = gImgs[imgId - 1].url;
    gCtx.drawImage(img, 0, 0);

}


function drawText(text, x, y) {
    gCtx.strokeStyle = getColorTxt();
    gCtx.fillStyle = getColorFillTxt();
    gCtx.font = `${getTxtFontSize()}px ${getFontTxt()}`
    gCtx.lineWidth = '2';
    // gCtx.textAlign = 'start';
    gCtx.textAlign = getTxtAlign();
    console.log('font:', gCtx.font);
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function draw(ev) {
    const { offsetX, offsetY } = ev;
    drawText(gMeme.lines[0].txt, offsetX, offsetY);
}

//download the canvas drawing
function downloadCanvas(elLink) {
    gIdx++;
    console.log(elLink)
    const data = gCanvas.toDataURL();
    console.log('data:', data);
    elLink.href = data;
    let str = `myMeme${gIdx}.jpg`;
    elLink.download = str;
    downloadImg(data);
}


function downloadImg(elLink) {
    var imgContent = elLink;
    elLink.href = `${imgContent}`;
}

//clear all the canvas
//add button
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}


function addText(txt) {
    if (gMeme.lines.length < 1) return;
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}


function getMemeText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function getColorTxt() {
    return gMeme.lines[gMeme.selectedLineIdx].colorTxt;
}

function getColorFillTxt() {
    return gMeme.lines[gMeme.selectedLineIdx].fillTxt;
}

function getTxtFontSize() {
    return gMeme.lines[gMeme.selectedLineIdx].sizeTxt;
}

function getFontTxt() {
    return gMeme.lines[gMeme.selectedLineIdx].fontTxt;
}

function getTxtAlign() {
    return gMeme.lines[gMeme.selectedLineIdx].align;
}

function deleteTxt() {
    if (gMeme.lines.length === 0) return;
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.selectedLineIdx > 0) gMeme.selectedLineIdx -= 1;
}