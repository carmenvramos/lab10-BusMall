/* globals ProductImgs  */
/* exported DisplayPic */

const picTemplate = document.getElementById('pic-template');


class DisplayPic {
    constructor(image, onSelect) {
        this.image = image;
        this.onSelect = onSelect;
    }

    update() {
        let selected = [20, 20, 20];
        for(var i = 1; i < 4; i++) {
            var random = getRandomIntInclusive(0, 19);
            console.log('random is ', random);
            if(selected.includes(random)) {
                i--;
                console.log('Skip this', random);
                continue;
            }
            else {
                const img = this.container.querySelector('#image-' + i);
                img.src = this.image[random].image;
                this.image[random].numviewed++;
                console.log('number of views ', this.image[random].numviewed);
                console.log(this.image[random]);
                console.log('Random is', random);
                img.addEventListener('click', (img) => {
                    console.log(img.currentTarget);
                    // this.image.indexOf(img.src);
                    console.log('selected img ', this.image.indexOf(img.src));
                    this.image[random].numselected++;

                    // console.log('number of selects', this.image[random], this.image[random].numselected);
                }) ;
                selected.push(random);
            }
          
        }
        
    }

    render() {
        const dom = picTemplate.content.cloneNode(true);

        this.container = dom.querySelector('div');
        // let selected = [20, 20, 20];
        // for(var i = 1; i < 4; i++) {
        //     var random = getRandomIntInclusive(0, 19);
        //     console.log('random is ', random);
        //     if(selected.includes(random)) {
        //         i--;
        //         console.log('Skip this', random);
        //         continue;
        //     }
        //     else {
        //         const img = this.container.querySelector('#image-' + i);
        //         img.src = this.image[random].image;
        //         this.image[random].numviewed++;
        //         console.log('number of views ', this.image[random].numviewed);
        //         console.log(this.image[random]);
        //         console.log('Random is', random);
        //         img.addEventListener('click', (img) => {
        //             console.log(img.currentTarget);
        //             // this.image.indexOf(img.src);
        //             console.log('selected img ', this.image.indexOf(img.src));
        //             this.image[random].numselected++;

        //             // console.log('number of selects', this.image[random], this.image[random].numselected);
        //         }) ;
        //         selected.push(random);
        //     }
          
        // }
        this.update();
        return dom;
    }
    
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

