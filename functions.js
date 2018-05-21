/* globals productImgs */
/* exported getRandomThree */


function getRandomThree() {
    let copyArray = productImgs;
    let copyIndex = indexNums.slice();
    var product1 = getProduct(copyArray, copyIndex);
    var product2 = getProduct(copyArray, copyIndex);
    var product3 = getProduct(copyArray, copyIndex);
    var randomThree = [product1, product2, product3];
    return randomThree;


    function getProduct(array, index) {
        var indexLength = index.length;
        var firstNum = index[0];
        var lastNum = index[indexLength - 1];
        

        var random = getRandomIntInclusive(firstNum, lastNum);
        while(!index.includes(random)){
            random = getRandomIntInclusive(firstNum, lastNum);
        }
        var product = array[random];
        index.splice(index.indexOf(random), 1);
        return product;
        
    }
    
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}