/* exported SurveyReport */

const surveyReportTemplate = document.getElementById('survey-report-template').content;

class SurveyReport {
    constructor(image) {
        this.image = image;
 
    }

    render() {
        const dom = surveyReportTemplate.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.image.name;
        columns[1].textContent = this.image.numViewed;
        columns[2].textContent = this.image.numSelected;
        if(this.image.numViewed) {
            columns[3].textContent = Math.round(this.image.numSelected / this.image.numViewed * 100) + ' %';
        } else {
            columns[3].textContent = '0 %';
        }
        
        return dom;

    }
}