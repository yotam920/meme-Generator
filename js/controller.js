'use strict';

function randerImg() {
    let strHTMLs = gImgs.map(img => {
        return `<img src="${img.url}" class="img-grid-item" onclick="onOpenEditor('${img.id}')"></img> `
    });
    let elGallery = document.querySelector('.main-img-gallery');
    elGallery.innerHTML = strHTMLs.join('');
}

function onOpenEditor(imgId) {
    openEditor();
    createMeme(imgId);
}

function onOpenGallery() {
    //need to poen gallery & close editor if we creating meme
    //openGallery();
    randerImg();
    closeEditor();
}

function closeEditor() {
    //need to close editor by click on gallery
    var elContainer = document.querySelector('.main-container');
    elContainer.classList.remove('hide-mode');
}