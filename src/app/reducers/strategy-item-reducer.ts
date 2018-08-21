import * as StrategyItemMetadataChanged  from '../utilities/actions';
export type Action = StrategyItemMetadataChanged.StrategyItemMetadataChanged;


const initialState: any = null;


export function defaults (state = initialState, action: Action): any {
    switch (action.type) {

        case "StrategyItemChanged": {
            return Object.assign({}, state, action.payload);
        }
        case "StrategyItemChangedClear": {
            state = null;
            return state;
        }
        case "LOG_OUT": {
            state = undefined;
        }
        default: {
            return state;
        }
    }
}