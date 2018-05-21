/* globals productImgs ProductPic  indexNums */
/* exported PicTemplate */

class ProductPic {

    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.numViewed = 0;
        this.numSelected = 0;
    }
}

let product1 = new ProductPic('bag', './images/bag.jpg');
let product2 = new ProductPic('banana', './images/banana.jpg');
let product3 = new ProductPic('bathroom', './images/bathroom.jpg');
let product4 = new ProductPic('boots', './images/boots.jpg');
let product5 = new ProductPic('breakfast', './images/breakfast.jpg');
let product6 = new ProductPic('bubblegum', './images/bubblegum.jpg');
let product7 = new ProductPic('chair', './images/chair.jpg');
let product8 = new ProductPic('cthulhu', './images/cthulhu.jpg');
let product9 = new ProductPic('dog-duck', './images/dog-duck.jpg');
let product10 = new ProductPic('dragon', './images/dragon.jpg');
let product11 = new ProductPic('pen', './images/pen.jpg');
let product12 = new ProductPic('pet-sweep', './images/pet-sweep.jpg');
let product13 = new ProductPic('scissors', './images/scissors.jpg');
let product14 = new ProductPic('shark', './images/shark.jpg');
let product15 = new ProductPic('sweep', './images/sweep.png');
let product16 = new ProductPic('tauntaun', './images/tauntaun.jpg');
let product17 = new ProductPic('unicorn', './images/unicorn.jpg');
let product18 = new ProductPic('usb', './images/usb.gif');
let product19 = new ProductPic('water-can', './images/water-can.jpg');
let product20 = new ProductPic('wine-glass', './images/wine-glass.jpg');

var productImgs = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
    product18,
    product19,
    product20
];

var indexNums = [];
for(let i = 0; i < productImgs.length; i++) {
    indexNums.push(i);
}