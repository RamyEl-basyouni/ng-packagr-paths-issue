import { Action } from '@ngrx/store';
import {QueryParams} from '../reducers/query-parameters';

export const UpdateStrategyItemScoreConst = 'UpdateStrategyItemScore';
export const SelectedOrganizationUnitChangedConst = "SelectedOrganizationUnitChanged";
export const SelectedTimeFilterChangedConst  = 'SelectedTimeFilterChanged';
export const TimeFilterItemsConst  = 'TimeFilterItems';
export const SelectedStrategyPlanChangedConst = 'SelectedStrategyPlanChanged';
export const StrategyPlansConst = 'StrategyPlans';
export const OrganizationUnitsConst = "OrganizationUnits";
export const DefaultStrategyPlanChangedConst = "DefaultStrategyPlanChanged";
export const SelectedStructureChangedConst = "SelectedStructureChanged";
export const UpdateTrackingChangedConst = "UpdateTrackingChanged";
export const SetTimeFilterFrequencyConst = "SetTimeFilterFrequency";
export const StructureFoldersConst = "StructureFolders";
export const QueryParametersConst = "QueryParameters";
export const SelectedGeneralFilterChangedConst = "SelectedGeneralFilterChanged";
export const StrategyItemMetadataChangedConst = "StrategyItemMetadataChanged";
export const KPIMetadataChangedConst = "KPIMetadataChanged";
export const KPITargetDefinitionChangedConst = "KPITargetDefinitionChanged";
export const StrategyItemChangedConst = 'StrategyItemChanged';
export const KPIItemChangedConst = 'KPIItemChanged';
export const KPIMetadataDatesChangedConst = 'KPIMetadataDatesChanged';
export const KPIThresholdDataChangedConst = 'KPIThresholdDataChanged';
export const KPIDisplayFormatChangedConst = "KPIDisplayFormatChanged";
export const MetricValuesUpdatedConst = "MetricValuesUpdated";
export const MetricDefinitionChangedConst = "MetricDefinitionUpdated";
export const OrganizationUnitsNamesConst = "OrganizationUnitsNames";

export class OrganizationUnitsNames implements Action {
    type = OrganizationUnitsNamesConst;
    constructor(public payload: any[]) { }
}
export class SelectedTimeFilterChanged implements Action{
 type = SelectedTimeFilterChangedConst;
   constructor(public payload: any) {}
}

export class TimeFilterItems implements Action {
 type = TimeFilterItemsConst;
   constructor(public payload: any) {}
}

export class SelectedStrategyPlanChanged implements Action{
 type = SelectedStrategyPlanChangedConst;

  constructor(public payload: any) {}
}

export class StrategyPlans implements Action{
 type = StrategyPlansConst;
  constructor(public payload: any[]) {}
}

export class SelectedOrganizationUnitChanged implements Action {
    type = SelectedOrganizationUnitChangedConst;
    constructor(public payload: any) { }
}

export class OrganizationUnits implements Action {
     type = OrganizationUnitsConst;
    constructor(public payload: any[]) { }
}

export class TestReducer implements Action {
    type = "TestReducer";
    constructor(public payload: any[]) { }
}

export class DefaultStrategyPlanChanged implements Action {
    type = DefaultStrategyPlanChangedConst;
    constructor(public payload: any) { }
}

export class SelectedStructureChanged implements Action {
    type = SelectedStructureChangedConst;
    constructor(public payload: string) { }
}

export class UpdateTrackingChanged implements Action {
    type = UpdateTrackingChangedConst;
    constructor(public payload: string) { }
}

export class SetTimeFilterFrequency implements Action {
    type = SetTimeFilterFrequencyConst;
    constructor(public payload: any) { }
}

export class StructureFolders implements Action {
    type = StructureFoldersConst;
    constructor(public payload: any[]) { }
}

export class QueryParameters implements Action {
    type = QueryParametersConst;
    constructor(public payload: QueryParams) {
        if(payload == null || payload.length == 0)
            this.type += 'Clear';
     }
}

export class SelectedGeneralFilterChanged implements Action {
    type = SelectedGeneralFilterChangedConst;
    constructor(public payload: string) { }
}

export class UpdateStrategyItemScore implements Action {
    type = UpdateStrategyItemScoreConst;
    constructor(public payload: any) { }
}

export class StrategyItemMetadataChanged implements Action {
    type = StrategyItemMetadataChangedConst;
    constructor(public payload: any) { }
}
export class KPIMetaDataChanged implements Action {
    type = KPIMetadataChangedConst;
    constructor(public payload: any) { }

}
export class KPTargetDefinitionChanged implements Action {
    type = KPITargetDefinitionChangedConst;
    constructor(public payload: any) { }
}

export class KPIMetadataDatesChanged implements Action {
    type = KPIMetadataDatesChangedConst;
    constructor(public payload: any) { }

}
export class KPIDisplayFormatChanged implements Action {
    type = KPIDisplayFormatChangedConst;
    constructor(public payload: any) { }
}
export class StrategyItemChanged implements Action {
    type = StrategyItemChangedConst;
    constructor(public payload: any) {
        if (payload == null || payload.length == 0)
            this.type += 'Clear';
    }
}

export class KPIItemChanged implements Action {
    type = KPIItemChangedConst;
    constructor(public payload: any) {
        if (payload == null || payload.length == 0)
            this.type += 'Clear';
    }
}

export class KPIThresholdDataChanged implements Action {
    type = KPIThresholdDataChangedConst;
    constructor(public payload: any[]) { }
}

export class MetricValuesUpdated implements Action {
    type = MetricValuesUpdatedConst;
    constructor(public payload: any) { }
}

export class MetricDefinitionChanged implements Action {
    type = MetricDefinitionChangedConst;
    constructor(public payload: any) { }
}
export type All
  = SelectedTimeFilterChanged |TimeFilterItems |SelectedStrategyPlanChanged | StrategyPlans | SelectedOrganizationUnitChanged | OrganizationUnits
    | DefaultStrategyPlanChanged | SelectedStructureChanged | UpdateTrackingChanged | SetTimeFilterFrequency | StructureFolders | QueryParameters
    | SelectedGeneralFilterChanged | UpdateStrategyItemScore
    ;

export type AllKPIManagementActions = KPIMetaDataChanged | KPIItemChanged | KPTargetDefinitionChanged | KPIMetadataDatesChanged | KPIDisplayFormatChanged;

export type AllMetricActions = MetricValuesUpdated | MetricDefinitionChanged;




