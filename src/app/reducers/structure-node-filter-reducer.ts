import * as SelectedStructureChanged  from '../utilities/actions';
export type Action = SelectedStructureChanged.All;

export interface SelectedStructureFilter {
    structureID: string,
    structureName: string,
    dimensionID?: string
}
export type SelectedStructureFilterState = SelectedStructureFilter;

const initialState: SelectedStructureFilterState = {
    structureID: '',
    structureName: '',
    dimensionID:''
};

export function defaults (state = initialState, action: Action): SelectedStructureFilterState {
    switch (action.type) {

        case "SelectedStructureChanged": {
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


