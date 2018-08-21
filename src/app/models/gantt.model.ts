
export class GanttBar {
    public position: number = 0;
    public width: number = 0;
    public color: string = "";
    public direction: boolean = false;
    public arrowDirection: string = '';
    public roundDirecton: string = "";
    public leftArrowData: string = "";
    public rightArrowData: string = "";
    public barType: string = ""
    public barData: string = "";
}

export class Gantt {
    StartDate: Date = new Date();
    EndDate: Date = new Date();
    ActualStartDate: Date = new Date();
    ActualEndDate: Date = new Date();
    ForcastedDate: Date = new Date();
    ProgressReportingDate: Date = new Date();
    FilterDate: Date = new Date();

    StartDate_str: string = "";
    EndDate_str: string = "";
    ActualStartDate_str: string = "";
    ActualEndDate_str: string = "";
    ForcastedDate_str: string = "";
    ProgressReportingDate_str: string = "";
    FilterDate_str: string = "";

    StartDateDay: number = 0;
    EndDateDay: number = 0;
    ActualStartDateDay: number = 0;
    ActualEndDateDay: number = 0;
    ForcastDay: number = 0;
    ProgressReportingDay: number = 0;
    FilterDateDay: number = 0;

    StartDateFormated: string = '';
    EndDateFormated: string = '';
    ActualStartDateFormated: string = '';
    ActualEndDateFormated: string = '';
    ForcastedDateFormated: string = '';
    ProgressReportingDateFormated: string = "";
    FilterDateFormated: string = "";

    StartDateFormated_ar: string = ' تاريخ البدء  ';
    StartDateFormated_en: string = ' Planned Start Date ';
    EndDateFormated_ar: string = ' تاريخ الانتهاء ';
    EndDateFormated_en: string = ' Planned End Date ';

    ActualStartDateFormated_ar: string = ' تاريخ البدء الفعلى ';
    ActualStartDateFormated_en: string = ' Actual Start Date ';

    ActualEndDateFormated_ar: string = ' تاريخ الانتهاءالفعلى ';
    ActualEndDateFormated_en: string = ' Actual End Date ';

    ForcastedDateFormated_ar: string = ' التاريخ المتوقع ';
    ForcastedDateFormated_en: string = ' Planned / Achievement Date ';



    Progress: number = 0;
    Status: any = null;
    Direction: boolean = true;
    CurrentYear: number = 2016;

    public GanttBarStart: GanttBar;
    public GanttBarProgress: GanttBar;
    public GanttBarEnd: GanttBar;
    public GanttBarForcasted: GanttBar;

    constructor(StartDate: string, EndDate: string, ActualStartDate: string, ActualEndDate: string,
        ForcastedDate: string, ProgressReportingDate: string,FilterDate: string, Progress: number, Status: number, Direction: boolean, currentYear: number) {
        this.CurrentYear = currentYear;
        try {

            this.StartDate_str = StartDate;
            this.EndDate_str = EndDate;
            this.ActualStartDate_str = ActualStartDate;
            this.ActualEndDate_str = ActualEndDate;
            this.ForcastedDate_str = ForcastedDate;
            this.ProgressReportingDate_str = ProgressReportingDate;

            if (EndDate == null && ActualEndDate == null) {
                StartDate = "";
                ActualStartDate = "";

            }

            if (StartDate != "" && StartDate != null) {
                this.StartDate = new Date(StartDate);
                this.StartDateDay = this.getDayOfTheYear(this.StartDate);
                this.StartDateFormated = this.dateFormate(this.StartDate);
  

            }
            if (EndDate != "" && EndDate != null) {
                this.EndDate = new Date(EndDate);
                this.EndDateDay = this.getDayOfTheYear(this.EndDate);
                this.EndDateFormated = this.dateFormate(this.EndDate);

            }
            if (ActualStartDate != "" && ActualStartDate != null) {
                this.ActualStartDate = new Date(ActualStartDate);
                this.ActualStartDateDay = this.getDayOfTheYear(this.ActualStartDate);
                this.ActualStartDateFormated = this.dateFormate(this.ActualStartDate);

            }
            if (ActualEndDate != "" && ActualEndDate != null) {
                this.ActualEndDate = new Date(ActualEndDate);
                this.ActualEndDateDay = this.getDayOfTheYear(this.ActualEndDate);
                this.ActualEndDateFormated = this.dateFormate(this.ActualEndDate);

            }
            if (ForcastedDate != "" && ForcastedDate != null) {
                this.ForcastedDate = new Date(ForcastedDate);
                this.ForcastDay = this.getDayOfTheYear(this.ForcastedDate);
                this.ForcastedDateFormated = this.dateFormate(this.ForcastedDate);

            }

            if (ProgressReportingDate != "" && ProgressReportingDate != null) {
                this.ProgressReportingDate = new Date(ProgressReportingDate);
                this.ProgressReportingDay = this.getDayOfTheYear(this.ProgressReportingDate);
                this.ProgressReportingDateFormated = this.dateFormate(this.ProgressReportingDate);
            }

            if (FilterDate != "" && FilterDate != null) {
                this.FilterDate = new Date(FilterDate);
                this.FilterDateDay = this.getDayOfTheYear(this.FilterDate);
                this.FilterDateFormated = this.dateFormate(this.FilterDate);
            }


            if (Progress == null)
                Progress = 0;

            if (Status == null)
                Status = 0;
            if (currentYear == null)
                currentYear = 2016;

            if (Progress == 0) {
                ForcastedDate = "";
                ActualStartDate = ""
            }

            this.Progress = Progress;
            this.Status = Status;

            this.Direction = Direction;

            this.GanttBarStart = new GanttBar();
            this.GanttBarProgress = new GanttBar();
            this.GanttBarEnd = new GanttBar();
            this.GanttBarForcasted = new GanttBar();
        }
        catch (x) {
            throw 'error'

        }

    }


    getDayOfTheYear(date: Date): any {

        return this.getDayOfTheYearInCurrent(date, this.CurrentYear);
        // return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    }

    getDayOfTheYearInCurrent(date: Date, CurrentYear: number): any {

        //get the difference of the current year and the date year in terms of days
        var datediffernece = CurrentYear - date.getFullYear();
        var dateexpand = datediffernece * 366;

        //get the day position in the year of the date
        var days = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;//UTC difference is in milliseconds so we need to convert milli seconds to days 
        days == 366 ? days = 365 : days = days;

        //get the day position according to the current year
        var daysDiff = days - dateexpand;
        return daysDiff;

    }

    dateFormate(date: Date) {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }

}


