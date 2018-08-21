import * as SelectedGeneralFilterChanged  from '../utilities/actions';
export type Action = SelectedGeneralFilterChanged.All;




const initialState = null;

export function defaults(state = initialState, action: Action): any {
    switch (action.type) {

        case "OrganizationUnitsNames": {
            return Object.assign([], state, action.payload);
        }
        case "LOG_OUT": {
            state = undefined;
        }
        default: {
            return state;
        }
    }
}