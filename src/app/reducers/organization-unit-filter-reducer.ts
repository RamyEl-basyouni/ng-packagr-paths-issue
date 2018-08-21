import * as SelectedOrganizationUnitChanged  from '../utilities/actions';
export type Action = SelectedOrganizationUnitChanged.All;


export interface SelectedOrganizationUnitFilter {
    organizationUnitID: string,
    organizationUnitName: string
}
export type SelectedOrganizationUnitFilterState = SelectedOrganizationUnitFilter;

const initialState: SelectedOrganizationUnitFilterState = {
    organizationUnitID: '',
    organizationUnitName:''
};

export function defaults(state = initialState, action: Action): SelectedOrganizationUnitFilterState {
    
    switch (action.type) {

        case "SelectedOrganizationUnitChanged": {
            return Object.assign({},state, action.payload);
        }
        case "LOG_OUT": {
            state = initialState;
        }
        default: {
            return state;
        }
    }
}