import { Component, OnInit, Input } from '@angular/core';
import { Gantt, GanttBar } from "../../models/gantt.model";

@Component({
    selector: 'app-gantt-chart',
    templateUrl: '../../../app/modules/gantt-chart/gantt-chart.component.html',
    styleUrls: ['../../../app/modules/gantt-chart/gantt-chart.component.css']
})
export class GanttChartComponent implements OnInit {


    constructor() {
    }

    @Input('gantt') set gantt(gantt) {
        this.Gantt = gantt;
        this.fireGantt(this.Gantt);
    }

    StartProgress: number = 0;
    EndProgress: number = 0;
    ganttTable = [];
    ganttArrows = [];
    ganttBars = [];
    Gantt: Gantt;
    ngOnInit() {
    }



    fireGantt(gantt: Gantt): any {
        this.buildGanttTable(gantt);

    
    }

    buildGanttTable(gantt: Gantt) {
        this.ganttTable = [];
        this.ganttArrows = [];
        this.ganttBars = [];

        if (gantt.ActualStartDateDay != 0)
            this.ganttTable.push({
                "label": (gantt.Direction == true ? gantt.ActualStartDateFormated_ar : gantt.ActualStartDateFormated_en) + gantt.ActualStartDateFormated,
                "value": gantt.ActualStartDateFormated,
                "day": gantt.ActualStartDateDay
            });

        if (gantt.StartDateDay != 0)
            this.ganttTable.push({
                "label": (gantt.Direction == true ? gantt.StartDateFormated_ar : gantt.StartDateFormated_en) + gantt.StartDateFormated,
                "value": gantt.StartDateFormated,
                "day": gantt.StartDateDay
            });

        if (gantt.EndDateDay != 0)
            this.ganttTable.push({
                "label": (gantt.Direction == true ? gantt.EndDateFormated_ar : gantt.EndDateFormated_en) + gantt.EndDateFormated,
                "value": gantt.EndDateFormated,
                "day": gantt.EndDateDay
            });

        if (gantt.ActualEndDateDay != 0)
            this.ganttTable.push({
                "label": (gantt.Direction == true ? gantt.ActualEndDateFormated_ar : gantt.ActualEndDateFormated_en) + gantt.ActualEndDateFormated,
                "value": gantt.ActualEndDateFormated,
                "day": gantt.ActualEndDateDay
            });
        //display the forcasted if there is no Actual end date or if the selected filter date is before the actual end date
        if (gantt.ForcastDay != 0 && (gantt.ActualEndDateDay == 0 || gantt.ActualEndDateDay > gantt.FilterDateDay)) 
            this.ganttTable.push({
                "label": (gantt.Direction == true ? gantt.ForcastedDateFormated_ar : gantt.ForcastedDateFormated_en) + gantt.ForcastedDateFormated,
                "value": gantt.ForcastedDateFormated,
                "day": gantt.ForcastDay
            });
        if (gantt.ProgressReportingDay != 0)
            this.ganttTable.push({
                "label": "",
                "value": "",
                "day": gantt.ProgressReportingDay
            });


        this.ganttTable.sort((a, b) => {
            if (a.day > b.day) {
                return 1;
            }

            if (a.day < b.day) {
                return -1;
            }

            return 0;
        });

        //compinig dates with same values for the arrows
        var uniqueValues = [];
        for (var i = 0; i < this.ganttTable.length; i++) {
            var day = this.ganttTable[i].day;
            if (this.ganttTable[i].label != '') {
                if (uniqueValues.filter(function (a) { return a.day == day }).length == 0 ) {
                    uniqueValues.push(this.ganttTable[i]);
                }
                else {
                    uniqueValues.map(a => a.day == day ? a.label += '-' + this.ganttTable[i].label : a.label = a.label);
                    // groups[groupName].push(myArray[i].color);
                }
            }
        }
        this.ganttArrows = uniqueValues;

        
        if (this.ganttArrows.length == 1) {  //Milestone case (all dates are in the same day)
            //add balck very thin bar
            this.ganttBars = [];
            var bar = new GanttBar();
            bar.position = this.getValuePercentageInYear(this.ganttArrows[0].day);
            bar.width = this.getValuePercentageInYear(0.5);
            bar.direction = this.Gantt.Direction;
            // bar.color = "#dedede";
            bar.color = "#000";
            this.ganttBars.push(bar);
        }
        else if (this.ganttTable.length > 0)
            this.buildBarsArray();
       
      

    }


    buildBarsArray() {
        this.ganttBars = [];
       // var ganttBars : Array < GanttBar>=[];
        for (var i = 0; i < this.ganttTable.length-1; i++) {
            var bar = new GanttBar();
            bar.position = this.getValuePercentageInYear(this.ganttTable[i].day);
            bar.width = this.getValuePercentageInYear(this.ganttTable[i + 1].day - this.ganttTable[i].day);
            bar.direction = this.Gantt.Direction;
            // bar.color = "#dedede";
            bar.color = this.getColor(this.ganttTable[i].day);
            this.ganttBars.push(bar);
        }
        
    }
    
    getColor(postion) {
        if (postion >= this.Gantt.ProgressReportingDay || this.Gantt.Progress == 0 || this.Gantt.Status == -1 || this.Gantt.Status == null)
            //handle case of there is no status and progress >0
        {

            //incase there is progress value with no status so we need to color till the reporting date wit dark grey
            if (this.Gantt.Progress > 0 && (this.Gantt.Status == -1 || this.Gantt.Status == null)&& postion < this.Gantt.ProgressReportingDay )
                return "#cfcfcf"; //dark grey
            return "#dedede";
        }
        else {
            //special case when the actual start date>end date
            if (this.Gantt.ActualStartDateDay > this.Gantt.EndDateDay && this.Gantt.ActualStartDateDay!=0) {
                if (postion == this.Gantt.EndDateDay) return "#dedede";

            }
            if (postion >= this.Gantt.EndDateDay)
                return this.getColorGrade("dark", this.Gantt.Status);// "#588325"; //darkColor
            if (this.Gantt.ActualStartDateDay == 0 && this.Gantt.ProgressReportingDay > this.Gantt.StartDateDay) {
                if (postion == this.Gantt.StartDateDay) return this.getColorGrade("normal", this.Gantt.Status);//return "#7fbe35"; //Normal
            }
            if (this.Gantt.StartDateDay < this.Gantt.ActualStartDateDay && this.Gantt.ActualStartDateDay <= this.Gantt.ProgressReportingDay) {
                if (postion == this.Gantt.StartDateDay) return this.getColorGrade("light", this.Gantt.Status);//return "#d9ecc3"; //light
                if (postion == this.Gantt.ActualStartDateDay) return this.getColorGrade("normal", this.Gantt.Status);//return "#7fbe35"; //Normal
            }
            if (this.Gantt.StartDateDay == this.Gantt.ActualStartDateDay && this.Gantt.ActualStartDateDay < this.Gantt.ProgressReportingDay) {
                if (postion == this.Gantt.StartDateDay) return this.getColorGrade("normal", this.Gantt.Status);//return "#7fbe35"; //Normal
            }
            if (this.Gantt.ActualStartDateDay < this.Gantt.ProgressReportingDay && this.Gantt.StartDateDay == this.Gantt.ProgressReportingDay ) {
                if (postion == this.Gantt.ActualStartDateDay) return this.getColorGrade("dark", this.Gantt.Status);//return "#588325"; //Dark
            }
            if (this.Gantt.ActualStartDateDay < this.Gantt.StartDateDay && this.Gantt.StartDateDay < this.Gantt.ProgressReportingDay) {
                if (postion == this.Gantt.ActualStartDateDay) return this.getColorGrade("dark", this.Gantt.Status);//return "#588325"; //Dark
                if (postion == this.Gantt.StartDateDay) return this.getColorGrade("normal", this.Gantt.Status);//return "#7fbe35"; //Normal
            }
            if (this.Gantt.ActualStartDateDay < this.Gantt.ProgressReportingDay && this.Gantt.ProgressReportingDay< this.Gantt.StartDateDay  ) {
                if (postion == this.Gantt.ActualStartDateDay) return this.getColorGrade("dark", this.Gantt.Status);//return "#588325"; //Dark
            }
            return this.getColorGrade("normal", this.Gantt.Status);//"#7fbe35"; //Normal

        }
    }
                       //dark -light-medium
        //0->Green =>"#588325","#d9ecc3",#7fbe35"
        //1->Yellow =>"#ac6313","#f4d9b5","#f99a30" 
        //2->Red =>"#b93938", "#ffc5c7","#ff3f40"
    getColorGrade(grade, status): any {
        var color = '';
        switch (grade)
        {
            case "light":
                status == 0 ? color = "#d9ecc3" : status == 1 ? color = "#f4d9b5" : status == 2 ? color = "#ffc5c7" : status == 4 ? color = "#b3d1e5" : color = "";
                break;
            case "dark":
                status == 0 ? color = "#588325" : status == 1 ? color = "#ac6313" : status == 2 ? color = "#b93938" : status == 4 ? color = "#043351" : color = "";
                break;
            case "normal":
                status == 0 ? color = "#7fbe35" : status == 1 ? color = "#f99a30" : status == 2 ? color = "#ff3f40" : status == 4 ? color = "#349adc" : color = "";
                break;
        }
        return color;
    }
    getArrrowDirection(yearPosition): any {
        
            if (yearPosition < 180) return "arrtoolTipLeft";
            else return "arrtoolTipRight";
      
        
    }
    setArrowStyle(arrow): any {

        if (this.Gantt.Direction) {

            return {
                'position': 'absolute',
                'visibility': 'visible',
                'top': "-18px",
                'width': "8px",
                'right': this.getValuePercentageInYear(arrow.day).toString() + '%'
            }

        }
        else {
            return {
                'position': 'absolute',
                'visibility': 'visible',
                'top': "-18px",
                'width': "8px",
                'left': this.getValuePercentageInYear(arrow.day).toString() + '%'

            }
        }
           
    }

    setStyle(bar): any {
        if (this.Gantt.Direction) {

            // at the start of the bar
            if (bar.day < 5 && bar.day>0) {
                return {
                    'position': 'absolute',
                    'visibility': 'visible',
                    'top': "-18px",
                    'width': "8px",
                    'right': this.getValuePercentageInYear(bar.day).toString() + '%' ,
                }
            }

            //at the end of the bar
            else if (bar.day > 360 && bar.day<=366 ) {

                return {
                    'position': 'absolute',
                    'visibility': 'visible',
                    'top': "-18px",
                    'width': "8px",
                    'right': "calc(" + this.getValuePercentageInYear(bar.day).toString() + '%' + " - 8px)",
                }

            }

            //outside the current year
            else if (bar.day > 366 || bar.day<=0) {
                return {
                    'display':'none',
                }
            }

            //normal case
            else {
                return {
                    'position': 'absolute',
                    'visibility': 'visible',
                    'top': "-18px",
                    'width': "8px",
                    'right': "calc(" + this.getValuePercentageInYear(bar.day).toString() + '%' + " - 4px)" ,
                }
            }

        }
        else {

            // at the start of the bar
            if (bar.day < 5 && bar.day>0) {
                return {
                    'position': 'absolute',
                    'visibility': 'visible',
                    'top': "-18px",
                    'width': "8px",
                    'left': this.getValuePercentageInYear(bar.day).toString() + '%',
                }
            }

            //at the end of the bar
            else if (bar.day > 360 && bar.day <= 366) {

                return {
                    'position': 'absolute',
                    'visibility': 'visible',
                    'top': "-18px",
                    'width': "8px",
                    'left': "calc(" + this.getValuePercentageInYear(bar.day).toString() + '%' + " - 8px)",
                }

            }

            //outside the current year
            else if (bar.day > 366 || bar.day<=0) {
                return {
                    'display': 'none',
                }
            }

            //normal case
            else {
                return {
                    'position': 'absolute',
                    'visibility': 'visible',
                    'top': "-18px",
                    'width': "8px",
                    'left': "calc(" + this.getValuePercentageInYear(bar.day).toString() + '%' + " - 4px)",
                }
            }

        }


    }

    getValuePercentageInYear(value: number): number {
        return ((value * 100) / 366);

    }

    


}
