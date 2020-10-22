'use strict';

var gImgs;

function createImg(url, id) {
    return {
        id,
        url,
        keywords: ['happy']
    }
}

function createImgs() {
    let imgs = [];
    for (let i = 0; i < 18; i++) {
        let img = createImg(`meme-imgs/${i+1}.jpg`, i + 1);
        imgs.push(img);
    }
    return imgs;
}

function getImgById(id) {
    return gImgs.find(img => img.id === id)
}

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}