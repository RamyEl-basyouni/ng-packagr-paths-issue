import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
import {
    Component,
    OnInit
    , Input
} from '@angular/core';
import { GanttBar } from '../../../models/gantt.model';

@Component({
    //animations: [
    //    trigger('flyInOut', [
    //        state('in', style({ transform: 'translateX(0)' })),
    //        transition('void => *', [
    //            style({ transform: 'translateX(-100%)' }),
    //            animate(1000)
    //        ]),
    //        transition('* => void', [
    //            animate(100, style({ transform: 'translateX(100%)' }))
    //        ])
    //    ])
    //],
    selector: 'app-barchart',
    templateUrl: '../../../../app/modules/gantt-chart/barchart/barchart.component.html',
    styleUrls: ['../../../../app/modules/gantt-chart/barchart/barchart.component.css']


})
export class BarchartComponent implements OnInit {
    ganttbar: GanttBar;

    constructor() {

    }

    setStyle(): any {
        if (this.ganttbar.direction) {

            return {
                'background-color': this.ganttbar.color,
                'width': this.ganttbar.width.toString() + '%',
                'right': this.ganttbar.position.toString() + '%',
                'border-radius': this.setRound()
            }

        }
        else {
            return {
                'background-color': this.ganttbar.color,
                'width': this.ganttbar.width.toString() + '%',
                'left': this.ganttbar.position.toString() + '%',
                'border-radius': this.setRound()
            }
        }


    }

    setRightArrow(): any {

        if ((this.ganttbar.arrowDirection == "right" || this.ganttbar.arrowDirection == "both") && this.ganttbar.width != 0 &&this.ganttbar.rightArrowData!='') {
            
            return {
                'position': 'absolute',
                'visibility': 'visible',
                'top': "-18px",
                'width': "8px",
                'right': "0px"
            }
        }
        else {
            return {
                'position': 'absolute',
                'visibility': 'hidden',
                'top': "-18px",
                'width': "8px",
                'right': "0px"
            }
        }


    }

    setLeftArrow(): any {

        if ((this.ganttbar.arrowDirection == "left" || this.ganttbar.arrowDirection == "both") && this.ganttbar.width != 0 && this.ganttbar.leftArrowData!='')
            return {
                'position': 'absolute',
                'visibility': 'visible',
                'top': "-18px",
                'width': "8px",
                'left': "0px"
            }
        else {
            return {
                'position': 'absolute',
                'visibility': 'hidden',
                'top': "-18px",
                'width': "8px",
                'left': "0px"
            }
        }
    }

    setRound(): any {
        var rightRound = '0 4px 4px 0';
        var leftRound = '4px 0px 0px 4px';

        if (this.ganttbar.roundDirecton == "right")
            return '0 4px 4px 0'
        else if (this.ganttbar.roundDirecton == "left")
            return '4px 0px 0px 4px'
        else if (this.ganttbar.roundDirecton == "both")
            return '4px 4px 4px 4px'
    }
    setBarData(): any {
        if (this.ganttbar.direction) {
            return {

            }

        }
        else {
            return {

            }
        }


    }

    ngOnInit() {

    }


    @Input('ganttbar') set bar(tempBar) {
        this.ganttbar = tempBar;
        if (this.ganttbar.direction) {
            var leftArrow = this.ganttbar.leftArrowData;
            this.ganttbar.leftArrowData = this.ganttbar.rightArrowData;
            this.ganttbar.rightArrowData = leftArrow;
        }
    }
}
