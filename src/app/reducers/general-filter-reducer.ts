import * as SelectedGeneralFilterChanged  from '../utilities/actions';
export type Action = SelectedGeneralFilterChanged.All;

export interface SelectedGeneralFilter {
    organizationUnitID: string,
    structureID: string,
    searchText: string,
    timeID: number,
    frequency:number
}
export type SelectedGeneralFilterState = SelectedGeneralFilter;

const initialState: SelectedGeneralFilterState = {
    organizationUnitID: '',
    structureID: '',
    searchText: '',
    timeID: 0,
    frequency:0
};

export function defaults (state = initialState, action: Action): SelectedGeneralFilterState {
    switch (action.type) {

        case "SelectedGeneralFilterChanged": {
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