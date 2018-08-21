import * as StructureFolders  from '../utilities/actions';
export type Action = StructureFolders.All;

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

export interface StructureFolder {
    data: any;
    id: number;
    name: string;
    parent: string;
    hasPermission: boolean;
}

export type StructureFolders = StructureFolder[];

const initialState: StructureFolders = null;

export function defaults (state = initialState, action: Action): StructureFolders {
    switch (action.type) {

        case "StructureFolders": {
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