export interface Score {
    Actual: { FormattedValue: string, Value: number, IsCarriedForward: boolean, CarriedForwardFrom: string },
    Target: { FormattedValue: string, Value: number, IsCarriedForward: boolean, CarriedForwardFrom: string },
    PreviousActual: { FormattedValue: string, Value: number, IsCarriedForward: boolean, CarriedForwardFrom: string },
    FutureTarget: { FormattedValue: string, Value: number, IsCarriedForward: boolean, CarriedForwardFrom: string },
    BasicScoreStatus: number,
    ScoreStatus: number,
    Variance: string,
    BasicScore: number,
    NormalizedScore: number,
    FormattedBasicScore: string,
    ScoreTrend: number,
    ActualTrend: number
}

export interface LinkedItemWithScore {

    ID: string,
    Name_En: string,
    Name_Ar: string,
    Description_En: string,
    Description_Ar: string,
    Frequency: number,
    StartDate: string,
    EndDate: string,
    Score: Score,
    PassDue: boolean,
    LinkedItems: LinkedItemWithScore[],
    DimensionMembers: DimensionMember[],
    AnalyticalComment: string
    LastUpdatedTimeID: number,
    AssociatedData: string,
    ForecastDate: string,
    Permissions: number[],
    Weight: number,
    ItemType: string,
    Order: number,
    ExtendedAttributes: { Key: string, Value: string }[],
    CategoryID: number,
    IsNumeric: boolean,
    IsMeasure: boolean,
    BandingID: number
}

export interface DimensionMember {
    MemberID: number,
    DimensionID: string,
    MemberUniqueName: string,
    MemberNameEn: string,
    MemberNameAr: string,
    Score: Score,
    DimensionMembers: DimensionMember[]
}

export interface StrategyItemWithScore {

    ID: string,
    Name_En: string,
    Name_Ar: string,
    Alias_En: string,
    Alias_Ar: string,
    Description_En: string,
    Description_Ar: string,
    ItemType: string,
    ItemLocation: string,
    StrategyItemAttributes: { Key: string, Value: string }[],
    Weight: number,
    Score: Score,
    AnalyticalComment: string,
    DefaultCalculationMethodPath: string,
    Scores: {
        key: string,
        Value: {
            Score: Score,
            Children: StrategyItemWithScore[],
            LinkedItems: LinkedItemWithScore[],
            DimensionMembers: DimensionMember[],
            AnalyticalComment: string,
            IsDefault: boolean
        }
    }[],
    OrganizationUnitID: string,
    RootStrategyItemID: string,
    StartDate: string,
    EndDate: string,
    ActualStartDate: string,
    ActualEndDate: string,
    LastModifiedDate: string
}
export interface StrategyItem {
        StrategyItemId: string,
        NameEn: string,
        NameAr: string,
        DescriptionEn: string,
        DescriptionAr: string,
        MissionEn: string,
        MissionAr: string,
        VisionEn: string,
        VisionAr: string,
        ValuesEn: string,
        ValuesAr: string,
        StartDate: Date,
        EndDate: Date,
        OrganizationUnitID: number
}


export interface StrategyItemSidebarOptions {
    componentViewName: string,
    itemType: string,
    routingPath: string,
    calculationMethod: string,
    calcChildrenCount: boolean
}