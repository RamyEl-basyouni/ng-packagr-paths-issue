
import * as UpdateTrackingChanged  from '../utilities/actions';
export type Action = UpdateTrackingChanged.All;

export interface UpdateTracking {
    updateScores: boolean;
}
export type UpdateTrackingState = UpdateTracking;

const initialState: UpdateTrackingState = {
    updateScores: false
};

export function defaults (state = initialState, action: Action): UpdateTrackingState {
    switch (action.type) {

        case "UpdateStrategyItemScore": {
            return Object.assign({}, state, action.payload);
        }
        case "LOG_OUT": {
            state = initialState;
        }
        default: {
            return state;
        }
    }
}