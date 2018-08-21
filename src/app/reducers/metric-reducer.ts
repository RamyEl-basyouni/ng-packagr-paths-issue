import * as MetricActions  from '../utilities/actions';
export type Action = MetricActions.AllMetricActions;


export type MetricState = { "OriginalMetricValues": any[], "UpdatedMetricValues": any[], "OriginalMetricDefinition": any[] ,"UpdatedMetricDefinition":any[] };
const initialState: MetricState = {

    OriginalMetricDefinition: [],
    UpdatedMetricDefinition: [],
    UpdatedMetricValues: [],
    OriginalMetricValues:[]
};



export function defaults(state = initialState, action: Action): MetricState {
    switch (action.type) {
        
        case "MetricDefinitionChanged":
            {
                state.UpdatedMetricDefinition[action.payload.Identifier] = action.payload.Data;
                return state;
            }
        case "MetricValuesUpdated":
            {
                state.UpdatedMetricValues[action.payload.Identifier] = action.payload.Data;
                return state;

            }
        case "SetOriginalMetricDefinitions":
            {
                state.OriginalMetricDefinition[action.payload.Identifier] = action.payload.Data;
                return state;
            }
        case "SetOriginalMetricValues":
            {
                state.OriginalMetricValues[action.payload.Identifier] = action.payload.Data;
                return state;
            }
        case "LOG_OUT": {
            state = undefined;
        }
        default:
            return state;
    }
}
