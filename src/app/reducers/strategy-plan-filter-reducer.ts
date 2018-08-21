import * as SelectedStrategyPlanChanged from '../utilities/actions';
export type Action =SelectedStrategyPlanChanged.All;

export interface SelectedStrategyPlanFilter {
    strategyPlanID: string,
    strategyPlanName: string,
    startDate: Date,
    endDate: Date
}
export type SelectedStrategyPlanFilterState = SelectedStrategyPlanFilter;

const initialState: SelectedStrategyPlanFilterState = {
    strategyPlanID: '',
    strategyPlanName: '',
    startDate: null,
    endDate: null
};

export function defaults (state = initialState, action: Action): SelectedStrategyPlanFilterState {
    switch (action.type) {

        case "SelectedStrategyPlanChanged": {
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

export interface StrategyPlanItem {
    Id: string,
    NameEn: string,
    NameAr: string,
    startDate: Date,
    endDate: Date
}
const initialStateItem: StrategyPlanItem[] = null;
export type StrategyPlanItems = StrategyPlanItem[];
export function GetStrategyItems (state = initialStateItem, action: Action): StrategyPlanItems {

    switch (action.type) {

        case "StrategyPlans": {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}
