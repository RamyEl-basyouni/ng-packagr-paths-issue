import { Observable } from 'rxjs';
import { compose, ActionReducerMap } from '@ngrx/store';
import { combineReducers, Store, Action } from '@ngrx/store';

import { GetTimeFiltersItems, defaults as selectedTimeFilter, SelectedTimeFilterState, TimeFilterItemsState }
from './time-filter-reducer';
import { GetStrategyItems, defaults as selectedStrategItem, SelectedStrategyPlanFilterState, StrategyPlanItems }
from './strategy-plan-filter-reducer';
import * as fromOrganizationUnitFilter from './organization-unit-filter-reducer';
import * as fromStructureFilter from './structure-node-filter-reducer';
import * as fromDefaultStrategyPlanReducer from './default-strategy-plan-reducer';
import * as fromOrganizationUnitsReducer from '../reducers/organization-units-reducer';
import * as fromTimeFilterFrequenciesReducer from '../reducers/time-filter-frequency-reducer';
import * as fromStructureFoldersReducer from '../reducers/structure-folders-reducer';
import * as fromUpdateTrackingReducer from '../reducers/update-tracking-reducer';
import * as fromQueryParameters from '../reducers/query-parameters';
import * as StrategyItemMetadataReducer from '../reducers/strategy-item-metadata-reducer';
import * as KPIManagementReducer from '../reducers/kpi-management-reducer';
import * as MetricReducer from '../reducers/metric-reducer';
import * as StrategyItemReducer from '../reducers/strategy-item-reducer'
import * as OrganizationUnitsNamesReducer from '../reducers/organization-units-names-reducer'


export interface AppState {
    selectedTimeFilter: SelectedTimeFilterState,
    timeFilterItems: TimeFilterItemsState,
    selectedOrganizationUnit: fromOrganizationUnitFilter.SelectedOrganizationUnitFilterState,
    selectedStructure: fromStructureFilter.SelectedStructureFilterState,
    SelectedStrategyPlanFilter: SelectedStrategyPlanFilterState,
    DefaultStrategyPlan: fromDefaultStrategyPlanReducer.DefaultStrategyPlanState,
    organizationUnits: fromOrganizationUnitsReducer.OrganizationUnitsState,
    strategyPlans: StrategyPlanItems,
    timeFilterFrequencies: fromTimeFilterFrequenciesReducer.TimeFilterFrequencyState,
    structureFolders: fromStructureFoldersReducer.StructureFolders,
    updateTracking: fromUpdateTrackingReducer.UpdateTracking,
    queryParameters: fromQueryParameters.QueryParams,
    StrategyItemMetadata: StrategyItemMetadataReducer.StrategyItemMetadata,
    KPIManagement: KPIManagementReducer.KPIState,
    MetricState: MetricReducer.MetricState,
    OrganizationUnitsNames:any,
    StrategyItem: any
}

export function getState(store: Store<AppState>): AppState {
    let state: AppState;

    store.take(1).subscribe(s => state = s);

    return state;
}

export const reducers: ActionReducerMap<AppState> = {
    selectedTimeFilter: selectedTimeFilter,
    timeFilterItems: GetTimeFiltersItems,
    selectedOrganizationUnit: fromOrganizationUnitFilter.defaults,
    selectedStructure: fromStructureFilter.defaults,
    SelectedStrategyPlanFilter: selectedStrategItem,
    DefaultStrategyPlan: fromDefaultStrategyPlanReducer.defaults,
    organizationUnits: fromOrganizationUnitsReducer.defaults,
    strategyPlans: GetStrategyItems,
    timeFilterFrequencies: fromTimeFilterFrequenciesReducer.defaults,
    structureFolders: fromStructureFoldersReducer.defaults,
    updateTracking: fromUpdateTrackingReducer.defaults,
    queryParameters: fromQueryParameters.defaults,
    StrategyItemMetadata: StrategyItemMetadataReducer.defaults,
    KPIManagement: KPIManagementReducer.defaults,
    MetricState: MetricReducer.defaults,
    StrategyItem: StrategyItemReducer.defaults,
    OrganizationUnitsNames: OrganizationUnitsNamesReducer.defaults
};
