import * as Enums from '../../utilities/enumerations'

export interface SaveStrategyItemWithChildrenDTO {
    LinkedChildren: LinkedChildStrategyItem[];
    OrganizationUnitID: string;
    ParentItemID: string;
    ParentItemType: string;
    RootStrategyItemID: string;
    StrategyItem: StrategyItem;
}

export interface EntityBase {
    EntityState?: Enums.EntityStateEnum;
}
export interface LinkedChildStrategyItem {
    //Description_Ar: string;
    //Description_En: string;
    EndDate: Date;
    //HasOneToManyRelationshipLink: boolean;
    ID: string;
    ItemLocation: string;
    ItemType: string;
    LastModifiedDate?: Date;
    //ListIndex: number;
    //ListURL: string;
    Name_Ar: string;
    Name_En: string;
    OrganizationUnitID: string;
    RelationType?: string;
    StartDate: Date;
    StrategyItemAttributes: StrategyItemAttribute[];
    //Url: string;
    Weight: number;
}
export interface StrategyItem extends StrategyItemBase {
    //HasOneToManyRelationshipLink: boolean;
    //IsLocked: boolean;
    StrategyItemAttributes: StrategyItemAttribute[];
    //UsedInParentOrganizationUnit: boolean;
}
export interface StrategyItemAttribute extends StrategyItemAttributeBase {
    AttributeValue: string;
    ItemAttributeType?: Enums.ItemAttributeType;
    LocalizedValueAr?: string;
    LocalizedValueEn?: string;
}
export interface StrategyItemAttributeBase extends EntityBase {
    AttributeID: number;
    AttributeName: string;
    AttributeType: string;
    AttributeValue: string;
    AttributeValue_Ar?: string;
    AttributeValue_En?: string;
    BooleanValue?: boolean;
    //CompareColumn: Enums.StrategyItemAttributeColumns;
    DateTimeValue?: Date;
    DecimalValue?: number;
    IntegerValue?: number;
    //Item: any;
    MaxStringValue?: string;
    StrategyItemID?: string;
    StringValue?: string;
}
export interface StrategyItemBase extends EntityBase {
    ActualEndDate?: Date;
    ActualStartDate?: Date;
    Alias_Ar: string;
    Alias_En: string;
    //CompareColumn: Enums.StrategyItemColumns;
    CreatedBy?: string;
    CreationDate?: Date;
    Description_Ar: string;
    Description_En: string;
    EndDate: Date;
    //FilterType: number;
    ID: string;
    //IsDeleted: boolean;
    //Item: any;
    ItemType: string;
    LastModifiedBy?: string;
    LastModifiedDate?: Date;
    //ListIndex: number;
    //ListURL: string;
    Name_Ar: string;
    Name_En?: string;
    StartDate: Date;
    //Status: number;
    //Url: string;
}