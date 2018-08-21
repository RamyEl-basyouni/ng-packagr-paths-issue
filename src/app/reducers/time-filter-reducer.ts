
import { TimeFilterModel } from '../models/time-filter.model';
import { TimeFilterItems } from '../utilities/actions';
import * as SelectedTimeFilterAction from '../utilities/actions';
export type Action =SelectedTimeFilterAction.All;

export interface SelectedTimeFilter {
    selectedUpdateFrequency: number,
    selectedFrequency: string,
    selectedYear: number,
    timeID: string,
    filter: Date,
    isYearToDate: boolean,
    startDate: Date,
    endDate: Date,
    SDate: string
}
export type SelectedTimeFilterState = SelectedTimeFilter;

const initialState: SelectedTimeFilterState = getFefaultTimeFilterValues();
// {
//    selectedUpdateFrequency: 365,
//    selectedFrequency: '',
//    selectedYear: new Date().getFullYear(),
//    isYearToDate: false,
//    timeID: new Date().getFullYear()+'1231',
//    filter: new Date(),
//    startDate: new Date(new Date().getFullYear(), 1, 1),
//    endDate: new Date(new Date().getFullYear(), 12, 31)
//};
function getFefaultTimeFilterValues() {
    let timeFilterValues: SelectedTimeFilterState;
    var urlParams = getUrlParameter('Year');
    timeFilterValues = {
        selectedUpdateFrequency: 365,
        selectedFrequency: '',
        selectedYear: new Date().getFullYear(),
        isYearToDate: false,
        timeID: new Date().getFullYear() + '1231',
        filter: new Date(),
        startDate: new Date(new Date().getFullYear(), 1, 1),
        endDate: new Date(new Date().getFullYear(), 12, 31),
        SDate: 'Year-'+new Date().getFullYear()
    };
    if (urlParams['year'] != undefined) {
        timeFilterValues.selectedYear = +urlParams['year'];
        timeFilterValues.isYearToDate = (urlParams['ytd'] === "true");;
        timeFilterValues.selectedUpdateFrequency = +urlParams['uf'];
        timeFilterValues.selectedFrequency = urlParams['freq'];
        timeFilterValues.SDate = urlParams['sdate'];
    }
        //alert('hi')
    return timeFilterValues;

}
function getUrlParameter(name: string) {
    let url = window.location.href;
    let params: any[] = [];
    let urlSegments = url.split(';');
    let i = 0;
    urlSegments.forEach((item, index) => {
        if (index != 0) {
            let segmentArr = item.split('=');
            params[segmentArr[0].toLowerCase()] = segmentArr[1];
        }
    });
    

    return params;
};
export function defaults (state = initialState, action: Action): SelectedTimeFilterState {
    switch (action.type) {

        case "SelectedTimeFilterChanged": {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}

export type TimeFilterItemsState = TimeFilterModel;
const initialStateTimeFilterItems = null;

export function GetTimeFiltersItems(state = initialStateTimeFilterItems, action: Action): TimeFilterItemsState {
    switch (action.type) {

        case "TimeFilterItems": {
            return Object.assign({}, state, action.payload);
        }
        case "LOG_OUT": {
            state = undefined;
        }
        default: {
            return state;
        }
    }
}