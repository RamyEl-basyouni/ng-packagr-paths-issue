export enum UpdateFrequencyEnum {
    /// <summary>
    /// Daily
    /// </summary>
    Daily = 1,
    /// <summary>
    /// Weekly
    /// </summary>
    Monthly = 30,
    /// <summary>
    /// Quarterly
    /// </summary>
    Quarterly = 90,

    SemiAnnual = 182,
    /// <summary>
    /// Yearly
    /// </summary>
    Annual = 365
}

export enum YearToDate {
    Yes = 0,
    No = 1,
    Default = 2
}

export enum DataIntegrationLogType {
    Info = 0,
    Error = 1,
    Warning = 2
}

export enum PMFObjectType {
    Metric = 1,
    KPI = 2,
    StrategyObject = 3,
    Strategy = 101,
    Perspective = 102,
    Objective = 103,
    Initiative = 104,
    Milestone = 105,
    Theme = 106,
    Risk = 107,
    Issue = 108,
    Task = 115,
    Project = 110,
    Program = 111,
    MetricPool = 4,
    KPIPool = 5,
    DimensionPool = 6,
    Dimension = 7,
    DimensionMember = 8,
    StructureItem = 9,
    OrganizationUnit = 201,
    Output = 504
}

export enum PMFPermissions {
    Read = 1,
    Write = 2,
    FillData = 3,
    ApproveData = 4,
    AddToPool = 5,
    Use = 6,
    DefinePlan = 7,
    Review = 8,
    Own = 9,
    SetPermission = 10,
    AnalyticalComment = 11,
    Administrate = 12,
    Collaborate = 13,
    LockData = 14,
    ReceiveNoteboardNotification = 15,
    IntegrateData = 16,
    ManageMeetings = 17,
    ViewMeetings = 18,
    NotificationEmailGroup = 19,
    RequestChange = 20,
    NotificationEmailCCGroup = 21,
    ApproveItem = 22,
    MigrateReportingData = 23
}

export const enum ItemAttributeType {
    Int = 0,
    Decimal = 1,
    Person = 2,
    People = 3,
    Text = 4,
    MultiLineText = 5,
    Date = 6,
    Multivalued = 7,
    Bool = 8,
    CustomDimension = 9,
    LOV = 10,
    DimensionMember = 11,
    User = 12,
    EPMIntegration = 13,
    Image = 14
}

export const enum EntityStateEnum {
    Unchanged = 0,
    Added = 1,
    Deleted = 2,
    Modified = 3
}

export const enum StrategyItemAttributeColumns {
    StrategyItemID = 0,
    AttributeID = 1,
    AttributeName = 2,
    AttributeValue = 3,
    AttributeType = 4,
    IntegerValue = 5,
    DecimalValue = 6,
    StringValue = 7,
    MaxStringValue = 8,
    DateTimeValue = 9,
    BooleanValue = 10,
    AttributeValue_Ar = 11,
    AttributeValue_En = 12
}

export const enum StrategyItemColumns {
    ID = 0,
    Name_En = 1,
    Name_Ar = 2,
    Alias_En = 3,
    Alias_Ar = 4,
    Description_En = 5,
    Description_Ar = 6,
    Url = 7,
    FilterType = 8,
    ItemType = 9,
    ListURL = 10,
    ListIndex = 11,
    StartDate = 12,
    EndDate = 13,
    IsDeleted = 14,
    CreatedBy = 15,
    CreationDate = 16,
    LastModifiedBy = 17,
    LastModifiedDate = 18,
    Status = 19,
    ActualStartDate = 20,
    ActualEndDate = 21
}

export enum MetricStatus {
    Approve = 2,
    Reject = 3
}

export enum MeetingStatusEnum {
    Sent = 1,
    SentUpdated = 2,
    Cancelled = 3,
}

export enum DirectScoreValueType {

    CompletionProgress,
    IndecatorStatus,
    ForecastDate,
    IndecatorStatusWithForecastDate,
    Value
}

export enum ItemViewSectionType {

    Security,

    LinkingSIs,

    LinkingKPIs,

    Metric,

    Contribution,

    CustomControl,

    Metadata,

    SIDirectScore,

    LinkedMilestones,

    LinkedRisks,

    LinkedIssues,

    EPMIntegration,

    LinkingInitiatives,

    LinkingMilestones,

    LinkingOutputs,

    LinkedTasksAndMilestones
}

export enum Contribution {
    None,
    ContributeToOne,
    ContributeToMany
}

export enum ExtendedAttributeType {
    Int,
    Decimal,
    NonNegativeDecimal,
    User,
    Text,
    MultiLineText,
    Date,
    MultiValue,
    Bool,
    DimensionMember,
    StructureItem,
    IndicatorGroup,
    UpdateFrequency,
    Category,
    LinkedDimensions
}

export enum ContributionTarget {
    Source = 0,
    Destination = 1
}

export enum KPIMeasureType {
    Actual = 1,
    Target = 2,
    Benchmark = 3
}

export enum MeasureCalculationMethod {
    DirectCalculation = 1,
    DirectWithDimensionCalculation = 2,
    FormulaCalculation = 0
}

export enum NotificationStatusEnum {
    NotOpened = 1,
    Opened = 2,
    Seen = 3
}

export enum DimensionType {
    Standard = 1,
    Structure = 2,
    Location = 3,
    Organization = 4
}

export enum PlanningCreationMode {
    Add = 1,
    Link = 2,
    AddAndLink = 3,
    None = 4,
}

export enum CalculationLinkingType {
    ChildrenStrategyItems,
    DirectKPIs,
    LinkedMetrics,
    DirectScore,
    CalculationMethodsRollup,
    ContributingStrategyItems
}


export enum Scope {
    operational,
    strategic
}

export enum WorkflowStatusType {
    Terminating,
    PendingApproval,
    PendingDataEntry,
    Discarding,
    EditableDraft,
    Rejecting
}

export enum IndicatorStatus {
    OnTarget,
    SlightlyOffTarget,
    OffTarget,
    NotApplicable,
    ExceedingTarget,
    NotDue,
}

export enum CascadeMode {
    None,
    Manual,
    Automatic,
    Provider
}

export enum StrategyItemStatusType {
    Terminating,
    PendingApproval,
    PendingDataEntry,
    Discarding,
    EditableDraft,
    Rejecting
}


export enum WeightMode {
    None,
    Number,
    Percentage
}

export enum ViewType {
    ManageView = 1,
    CardView = 2
}

export enum DocumentType {
    Collaboration = 0,
    DataValidation = 1,
    Workflow = 2
}