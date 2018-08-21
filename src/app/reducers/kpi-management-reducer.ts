import * as KPIChanged  from '../utilities/actions';
import {KPIMeasureType } from '../utilities/enumerations';

export type Action = KPIChanged.AllKPIManagementActions;


export type KPIState = { "NewKPI": boolean, "OriginalKPI": any, "UpdatedKPI": any,"Offset":any};
const initialState: KPIState = {
    NewKPI: true, OriginalKPI: {}, UpdatedKPI: {}, Offset:0
};



export function defaults(state = initialState, action: Action): KPIState {
    switch (action.type) {
        case "DefaultKPI":
        case "KPILoaded":
            return Object.assign({}, state, action.payload);
        case "KPIItemChanged":
            return Object.assign({}, state, action.payload);
        case "KPIMetadataDataChanged":
            {
                var kpi = state.UpdatedKPI;
                if (action.payload.IsSystemAttribute)
                    kpi[action.payload.AttributeName] = action.payload.KPI[action.payload.AttributeName];
                else
                {
                    for (var index = 0; index < kpi.ExtendedAttributes.length; index++) {
                        if (action.payload.AttributeName == kpi.ExtendedAttributes[index].AttributeName) {
                            kpi.ExtendedAttributes[index].AttributeValue = action.payload.KPI.ExtendedAttributes[index].AttributeValue ;
                            break;
                        }
                    }
                }
                state.UpdatedKPI = kpi;
                return state;

            }

        case "KPIOffsetDataChanged":
            {
                state.Offset= action.payload;
                return state;

            }
        case "KPIMetadataTagsChanged":
            {
                state.UpdatedKPI.Tags = action.payload.Tags;
                return state;

            }
        case "KPIThresholdDataChanged": {
            var updateKPI = state.UpdatedKPI;
            updateKPI.Targets[0].BandingID = action.payload.BandingID;
            updateKPI.Targets[0].BandingMethodID = action.payload.BandingMethodID;
            updateKPI.Targets[0].Pattern = action.payload.Pattern;
            updateKPI.Targets[0].BestValue = action.payload.BestValue;
            updateKPI.Targets[0].WorstValue = action.payload.WorstValue;
            updateKPI.Targets[0].SlightlyOffTargetValue = action.payload.YellowThreshold;
            updateKPI.Targets[0].OnTargetValue = action.payload.GreenThreshold;
            return state;
        }
        case "KPIMetadataDatesChanged":
        case "KPIDisplayFormatChanged":
            {
                var updateKPI = state.UpdatedKPI;
                if (action.payload != null) {
                    updateKPI.Targets[0].MeasureDisplayFormat.DecimalPlaces = action.payload.DecimalPlaces;
                    updateKPI.Targets[0].MeasureDisplayFormat.Multiplier = action.payload.Multiplier;
                    updateKPI.Targets[0].MeasureDisplayFormat.SymbolsOnLeft_Ar = action.payload.SymbolsOnLeft_Ar;
                    updateKPI.Targets[0].MeasureDisplayFormat.SymbolsOnLeft_En = action.payload.SymbolsOnLeft_En;
                    updateKPI.Targets[0].MeasureDisplayFormat.SymbolsOnRight_Ar = action.payload.SymbolsOnRight_Ar;
                    updateKPI.Targets[0].MeasureDisplayFormat.SymbolsOnRight_En = action.payload.SymbolsOnRight_En;
                    updateKPI.Targets[0].MeasureDisplayFormat.UseNumberSeparator = action.payload.UseNumberSeparator;
                }
                return state;
            }
        case "KPIMeasureDefinitionChanged":
            {
                var measureType = action.payload.MeasureType;
                var updatedMeasure = null;
                if (measureType == KPIMeasureType.Actual)
                    updatedMeasure = state.UpdatedKPI.KPIActual;
                    else
                    updatedMeasure = state.UpdatedKPI.Targets[0];
                updatedMeasure.CalculationMethod = action.payload.Data.CalculationMethod;
                updatedMeasure.IsCarriedForward = action.payload.Data.IsCarriedForward;
                updatedMeasure.CarryForwardSlots = action.payload.Data.CarryForwardSlots;

                return state;
            }
        case "KPIMeasureDirectDefinitionChanged":
            {
                var measureType = action.payload.MeasureType;
                var updatedMeasure = null;
                if (measureType == KPIMeasureType.Actual)
                    updatedMeasure = state.UpdatedKPI.KPIActual;
                else
                    updatedMeasure = state.UpdatedKPI.Targets[0];
                updatedMeasure.MetricMapping = action.payload.Data.MetricMapping;
                updatedMeasure.Formula = action.payload.Data.Formula;

                return state;
            }
        case "KPIMeasureFormulaDefinitionChanged":
            {
                var measureType = action.payload.MeasureType;
                var updatedMeasure = null;
                if (measureType == KPIMeasureType.Actual)
                    updatedMeasure = state.UpdatedKPI.KPIActual;
                else
                    updatedMeasure = state.UpdatedKPI.Targets[0];
                updatedMeasure.MetricMapping = action.payload.Data.MetricMapping;
                updatedMeasure.Formula = action.payload.Data.Formula;

                return state;
            }
        case "LOG_OUT": {
            state = undefined;
        }
        default:
            return state;
    }
}
