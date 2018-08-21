import * as OrganizationUnits  from '../utilities/actions';
export type Action = OrganizationUnits.All;

export interface Attribute {
    Name: string;
    Value: string;
}

export interface DimensionMember {
    ID: number;
    Code: number;
    NameEn: string;
    NameAr: string;
    ParentID?: number;
    StartDate: Date;
    EndDate?: any;
    TypeID: number;
    ChildrenCount: number;
    Attributes: Attribute[];
    CanRead: boolean;
    CanWrite: boolean;
    HasRequiredPermission: boolean;
}

export interface Data {
    PermissionsIds: number[];
    DimensionMember: DimensionMember;
    ID: string;
    DimensionID: string;
    MemberCode: number;
}

export interface OrganizationUnit {
    data: Data;
    id: number;
    name: string;
    parent: string;
    hasPermission: boolean;
}

export type OrganizationUnitsState = OrganizationUnit[];

const initialState: OrganizationUnitsState = null;

export function defaults(state = initialState, action: Action): OrganizationUnitsState {
    
    switch (action.type) {

        case "OrganizationUnits": {

            return Object.assign([], state, action.payload);
        }
        case "LOG_OUT": {
            state = initialState;
        }
        default: {
            return state;
        }
    }
}