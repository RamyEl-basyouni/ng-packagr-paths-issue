import * as DefaultStrategyPlanChanged  from '../utilities/actions';
export type Action = DefaultStrategyPlanChanged.All;

export interface DefaultStrategyPlan {
    StrategyPlanID: string,
    StrategyPlanNameEn: string
    StrategyPlanNameAr: string
}
export type DefaultStrategyPlanState = DefaultStrategyPlan;

const initialState: DefaultStrategyPlanState = {
    StrategyPlanID:'',
    StrategyPlanNameEn: '',
    StrategyPlanNameAr: ''
};

export function defaults (state = initialState, action: Action): DefaultStrategyPlanState {
    switch (action.type) {

        case "DefaultStrategyPlanChanged": {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}