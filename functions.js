/* globals ProductImgs */
/* exported getRandomThree */


function getRandomThree() {
    let copyArray = ProductImgs;
    let copyIndex = IndexNum.slice();
    // console.log('index array', copyIndex);
    var product1 = getProduct(copyArray, copyIndex);
    var product2 = getProduct(copyArray, copyIndex);
    var product3 = getProduct(copyArray, copyIndex);
    var randomThree = [product1, product2, product3];
    return randomThree;


    function getProduct(array, index) {
        var indexLength = index.length;
        var num1 = index[0];
        var num2 = index[indexLength - 1];
        

        // console.log('num1 num2 ', num1, num2);
        var random = getRandomIntInclusive(num1, num2);
        while(!index.includes(random)){
            random = getRandomIntInclusive(num1, num2);
        }
        // console.log('random num ', random);
        var product = array[random];
        index.splice(index.indexOf(random), 1);
        // console.log('new index ', index);
        // console.log('product ', product);
        return product;
        
    }
    
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}