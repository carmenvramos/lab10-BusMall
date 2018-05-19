/* globals ProductImgs */


function getRandomThree() {
    let copyArray = ProductImgs.slice();
    var product1 = getProduct(copyArray);
    var product2 = getProduct(copyArray);
    var product3 = getProduct(copyArray);
    var randomThree = [product1, product2, product3];
    return randomThree;
}

function getProduct(array) {
    var index = getRandomIntInclusive(0, array.length);
    var product = array[index];
    array.splice(index, 1);
    return product; 
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}