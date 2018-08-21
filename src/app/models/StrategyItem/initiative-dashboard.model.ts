import { Gantt } from "../gantt.model"
import { AppState, getState } from '../../reducers/index';
import { Store } from '@ngrx/store';


export class Milestone {


    Gantt: Gantt;
    ID: string;
    Owner_Ar: string;
    Owner_En: string;
    Name_Ar: string;
    Name_En: string;
    StartDate: string;
    EndDate: string;
    ActualStartDate: string;
    ActualEndDate: string;
    ForcastedDate: string;
    ProgressReportingDate: string;
    FilterDate: string;
    LastModifiedDate: string;
    Progress: number;
    Status: any;
    IsDeliverable: boolean;
    DeliverableType: string;
    itemType: string;
    lang: boolean;
    Scores: any[];
    row: Row = new Row;
    hasEditPermission: boolean;
    constructor() {
        this.row.displayArrow = "hidden"

    }
    calculateGantt(currentyear) {
        // this.Gantt = new Gantt("01/01/2016", "11/30/2016", "01/20/2016", "11/15/2016", "", 100, 3, this.lang);
        this.Gantt = new Gantt(this.StartDate,
            this.EndDate,
            this.ActualStartDate,
            this.ActualEndDate,
            this.ForcastedDate,
            this.ProgressReportingDate,
            this.FilterDate,
            this.Progress,
            this.Status,
            this.lang,
            currentyear
        )
    }



}

export class Task {

    ID: string;
    Gantt: Gantt;
    Owner_Ar: string;
    Owner_En: string;
    Name_Ar: string;
    Name_En: string;
    StartDate: string;
    EndDate: string;
    ForcastedDate: string;
    ActualStartDate: string;
    ActualEndDate: string;
    ProgressReportingDate: string;
    FilterDate: string;
    LastModifiedDate: string;
    Progress: number;
    Status: number;
    lang: boolean;
    itemType: string;
    row: Row = new Row;

    tasks: Task[] = [];
    milestones: Milestone[] = [];

    constructor() {


    }
    //milestoneObject.. should be added..
    calculateGantt(currentYear) {

        this.Gantt = new Gantt(this.StartDate,
            this.EndDate,
            this.ActualStartDate,
            this.ActualEndDate,
            this.ForcastedDate,
            this.ProgressReportingDate,
            this.FilterDate,
            this.Progress,
            this.Status,
            this.lang,
            currentYear);
    }

}

export class display {
    name: string = "";
    owner: string = "";
    status: number = -1;
    progress: number;
    lastmodifieddate: string = "";
    key: number;
    level: number;
    levelClass: string = "";
    arrowVisibility: string = "visible";
    rowVisibility: string = "table-row"
    arrowClass: string = "fa fa-caret-";
    showLoader: boolean = false;
    hasNoData: boolean = false;
    itemtype: string = ""
    gantt: Gantt;
    ID: string = "";
    StartDate: string;
    EndDate: string;
    ForcastedDate: string;
    ActualStartDate: string;
    ActualEndDate: string;
    ProgressReportingDate: string;
    FilterDate: string;
    hasEditPermission: boolean;

    constructor() { }

    calculateGantt(currentYear, lang) {

        this.gantt = new Gantt(this.StartDate,
            this.EndDate,
            this.ActualStartDate,
            this.ActualEndDate,
            this.ForcastedDate,
            this.ProgressReportingDate,
            this.FilterDate,
            this.progress,
            this.status,
            lang,
            currentYear);
    }

}

export class Row {

    displayArrow: string = "visible";
    dsiplayRow: string = "table-row";
    level: number = 0;
    levelClass: string = "";
    arrowDirection: string = "right";
    key: number = 0;
    treeLoaded: boolean = false;
    collapsed: boolean = false;
    root: boolean = false;
}