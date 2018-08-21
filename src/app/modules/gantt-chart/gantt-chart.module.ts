
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common';

/************ Components ************/
import { GanttChartComponent } from './gantt-chart.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
    imports: [
         CommonModule
    ],
    declarations: [
        GanttChartComponent,
        BarchartComponent
    ],
    
    exports: [
        GanttChartComponent, BarchartComponent
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GanttModule { }

export {
    GanttChartComponent, BarchartComponent
}
