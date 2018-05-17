/* globals PicTemplate */
/* exported ProductPic   */

const appTemplate = document.getElementById('app-template');

class ProductPic {

    constructor(image, numviewed, numselected) {
        this.image = image;
        this.numviewed = numviewed;
        this.numselected = numselected;
    }
    render() {
        const dom = appTemplate.content;

        const addPicSection = dom.getElementById('grab-pic');
        const addPicDisplay = new PicTemplate();
        addPicSection.appendChild(addPicDisplay.render());




        return dom;
    }
    
    
}



let product1 = new ProductPic('./images/bag.jpg', 0, 0);
let product2 = new ProductPic('./images/banana.jpg', 0, 0);
let product3 = new ProductPic('./images/bathroom.jpg', 0, 0);
let product4 = new ProductPic('./images/boots.jpg', 0, 0);
let product5 = new ProductPic('./images/breakfast.jpg', 0, 0);
let product6 = new ProductPic('./images/bubblegum.jpg', 0, 0);
let product7 = new ProductPic('./images/chair.jpg', 0, 0);
let product8 = new ProductPic('./images/cthulhu.jpg', 0, 0);
let product9 = new ProductPic('./images/dog-duck.jpg', 0, 0);
let product10 = new ProductPic('./images/dragon.jpg', 0, 0);
let product11 = new ProductPic('./images/pen.jpg', 0, 0);
let product12 = new ProductPic('./images/pet-sweep.jpg', 0, 0);
let product13 = new ProductPic('./images/scissors.jpg', 0, 0);
let product14 = new ProductPic('./images/shark.jpg', 0, 0);
let product15 = new ProductPic('./images/sweep.png', 0, 0);
let product16 = new ProductPic('./images/tauntaun.jpg', 0, 0);
let product17 = new ProductPic('./images/unicorn.jpg', 0, 0);
let product18 = new ProductPic('./images/usb.gif', 0, 0);
let product19 = new ProductPic('./images/water-can.jpg', 0, 0);
let product20 = new ProductPic('./images/wine-glass.jpg', 0, 0);

var ProductImgs = [product1.image,
    product2.image,
    product3.image,
    product4.image,
    product5.image,
    product6.image,
    product7.image,
    product8.image,
    product9.image,
    product10.image,
    product11.image,
    product12.image,
    product13.image,
    product14.image,
    product15.image,
    product16.image,
    product17.image,
    product18.image,
    product19.image,
    product20.image];


