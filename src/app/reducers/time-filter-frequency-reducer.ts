import { UpdateFrequency, Frequencies } from '../../App/models/time-filter.model';
import * as SetTimeFilterFrequency  from '../utilities/actions';
export type Action = SetTimeFilterFrequency.All;

//export interface TimeFilterFrequency {
   // FrequencyID: string,
  //  FrequencyName: string,
  //  IndicatingDate: string;
  //  StartDate: string;
 //   EndDate: string;
//}
//export type TimeFilterFrequencyState = TimeFilterFrequency[];

export type TimeFilterFrequencyState = UpdateFrequency[];

const initialState: TimeFilterFrequencyState = [{
UpdateFrequencyID:365,
UpdateFrequencyName:'Annual',
Frequencies:[{
    FrequencyID: '-1',
    FrequencyName: ' ',
    IndicatingDate: '31/12',
    StartDate: '1/1',
    EndDate: '31/12'
}]
}];

export function defaults (state = initialState, action: Action): TimeFilterFrequencyState {
    switch (action.type) {

        case "SetTimeFilterFrequency": {
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