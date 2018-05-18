/* globals ProductImgs   */
/* exported DisplayPic */

const picTemplate = document.getElementById('pic-template');
let selected = [20, 20, 20];


class DisplayPic {
    constructor(image, onSelect) {
        this.image = image;
        this.onSelect = onSelect;
    }

    update() {
        for(var i = 1; i < 4; i++) {
            var random = getRandomIntInclusive(0, 19);
            if(selected.includes(random)) {
                i--;
                continue;
            }
            else {
                this.img = this.container.querySelector('#image-' + i);
                this.img.src = this.image[random].image;
                this.image[random].numviewed++;
                this.img.addEventListener('click', (onSelect) => {
                    this.onSelect(this.img);

                    this.update();
                }) ;
                selected[i-1] = random;
            }
          
        }
        
    }

    render() {
        const dom = picTemplate.content.cloneNode(true);

        this.container = dom.querySelector('div');

        this.update();
        return dom;
    }
    
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

