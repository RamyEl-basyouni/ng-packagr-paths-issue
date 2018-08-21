import * as StrategyItemMetadataChanged  from '../utilities/actions';
export type Action = StrategyItemMetadataChanged.StrategyItemMetadataChanged;

export interface StrategyItemMetadata {
    key: any,
    value: any
}

export type StrategyItemMetadataState = StrategyItemMetadata;
const initialState: StrategyItemMetadataState = null;


export function defaults (state = initialState, action: Action): StrategyItemMetadataState {
    switch (action.type) {

        case "StrategyItemMetadataChanged": {
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