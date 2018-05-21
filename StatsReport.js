/* globals SurveyReport */
/* exported StatsReport */


const statsReportTemplate = document.getElementById('rpt-template');

class StatsReport {
    constructor(images) {
        this.images = images;
    }
    
    update(images) {
        this.images = images;
        while(this.tableBody.lastElementChild) {
            this.tableBody.lastElementChild.remove();
        }

        for(let i = 0; i < this.images.length; i++) {
            const reportComponent = new SurveyReport(this.images[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
    }

    render() {

        const dom = statsReportTemplate.content;
        console.log(dom);
        this.tableBody = dom.querySelector('tbody');
        for(let i = 0; i < this.images.length; i++) {
            const reportComponent = new SurveyReport(this.images[i]);
            this.tableBody.appendChild(reportComponent.render());
        }

        return dom;
    }
}