/* globals productImgs */
/* exported DisplayPic */

const picTemplate = document.getElementById('pic-template');


class DisplayPic {
    constructor(images, onSelect) {
        this.images = images;
        this.onSelect = onSelect;
    }

    update(images) {
        this.images = images;
        for(var i = 0; i < this.images.length; i++) {
            // console.log('loop update(images)');
            // console.log('i = ', i);
            const img = this.container.querySelector('#image-' + (i + 1));
            // console.log(img);
            img.src = this.images[i].image;
            this.images[i].numViewed++;      
        }
    }

    render() {
        const dom = picTemplate.content.cloneNode(true);
        this.container = dom.querySelector('div');

        for(let i = 0; i < this.images.length; i++) {
            const img = this.container.querySelector('#image-' + (i + 1));
            img.addEventListener('click', () => {
                this.onSelect(this.images[i]);
            });
        }

        this.update(this.images);
        return dom;
    }
}