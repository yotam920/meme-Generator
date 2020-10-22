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

function moveTxt(event) {
    //move the text on the meme by mouse move
    return null;
}




//download the canvas drawing 
// add download button 
function downloadCanvas(elLink) {
    gIdx++;
    const data = gCanvas.toDataURL();
    console.log(data);
    elLink.href = data;
    let str = `myMeme${gIdx}.jpg`;
    elLink.download = str;
}