/* globals DisplayPic getRandomThree StatsReport images  ProductImgs*/
/* exported App   */

const appTemplate = document.getElementById('app-template');

class App {

    constructor() {
        this.totalClicks = 0;
    }

    // showReport() {
    //     if(!this.reportComponent) {
    //         this.reportComponent = new StatsReport(this.images);
    //         const reportDom = this.reportComponent.render();
    //         this.reportSection.appendChild(reportDom);
    //     }
    //     else {
    //         this.reportComponent.update(this.images);
    //     }
    // }
    
    render() {
        const dom = appTemplate.content;

        const addPicSection = dom.getElementById('display-img');
        const addPicDisplay = new DisplayPic(getRandomThree(), (userChoice) => {
            if(this.totalClicks < 5) {
                userChoice.numSelected++;
                console.log('user Choice', userChoice);
                this.totalClicks++;
                addPicDisplay.update(getRandomThree());
            }
            else {
                alert('Thank you! You have completed your ' + this.totalClicks + ' selections.');
                // this.showReport();
                for(var i = 0; i < 20; i++) {
                    console.log('Product Imgs', ProductImgs[i]);
                }
            }
        });

        addPicSection.appendChild(addPicDisplay.render());

        this.reportSection = dom.getElementById('rpt-display');
        // this.showReport();

        return dom;
    }
}




