import * as QueryParameters  from '../utilities/actions';
export type Action = QueryParameters.All;


export interface QueryParam{
    key: string,
    value: any
}


export type QueryParams = QueryParam[];

const initialState: QueryParams = null;
export  function defaults (state = initialState, action: Action): QueryParams {
    switch (action.type) {

        case "QueryParameters": {
             return Object.assign([], state, action.payload);
        }
        
        case "QueryParametersClear": {
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