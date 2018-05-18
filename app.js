/* globals PicTemplate */
/* exported ProductPic   */

const appTemplate = document.getElementById('app-template');

class App {

    constructor() {
        this.image = ProductImgs;
        this.numviewed = 0;
        this.numselected = 0;
        this.totalClicks = 0;
    }
    render() {
        const dom = appTemplate.content;
        console.log(this.image);

        const addPicSection = dom.getElementById('display-img');
        const addPicDisplay = new DisplayPic(this.image, (userChoice) => {
            userChoice.numselected++;
        });

        addPicSection.appendChild(addPicDisplay.render());

        return dom;
    }
    
}




