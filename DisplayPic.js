/* globals ProductImgs ProductPic */
/* exported PicTemplate */

const picTemplate = document.getElementById('pic-template');


class PicTemplate {
    
    
    render() {
        const dom = picTemplate.content;
        let selected = [20, 20, 20];
        for(var i = 1; i < 4; i++) {
            var random = getRandomIntInclusive(0, 19);
            console.log(random);
            console.log(ProductImgs[random]);
            if(selected.includes(random)) {
                i--;
                continue;
            }
            else {
                console.log(selected[i]);
                const img = dom.getElementById('image-' + i);
                img.src = ProductImgs[random];
                t.numviewed++;
                img.addEventListener('click', () => {
                    img.numselected++;
                    console.log(img);
                }) ;
                selected.push(random);
            }
            // if(img.src !==) 
            const numviews = ProductPic.numviewed ++;
            // console.log(i, numviews);
            // console.log('this is img', img.src);
            // console.log(random);
        }
        
        return dom;
    }
    
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
