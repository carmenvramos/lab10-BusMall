/* globals PicTemplate DisplayPic getRandomThree */
/* exported ProductPic   */

const appTemplate = document.getElementById('app-template');

class App {

    constructor() {
        this.totalClicks = 0;
    }
    
    render() {
        const dom = appTemplate.content;

        const addPicSection = dom.getElementById('display-img');
        const addPicDisplay = new DisplayPic(getRandomThree(), (userChoice) => {
            if(this.totalClicks < 5) {
                userChoice.numselected++;
                console.log(userChoice)
                this.totalClicks++;
                addPicDisplay.update(getRandomThree());
            }
            else {
                alert('total clicks = ' + this.totalClicks);
            }
        });

        addPicSection.appendChild(addPicDisplay.render());

        return dom;
    }
    
}




