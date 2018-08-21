export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}
export interface UserConnection {
    URL: string;
    Username: string;
    Password: string;
    TenantID: number
}
export interface MappedKPI {
    destinationKPI: any;
    sourceKPI: any;
    destinationKPIActualMetric: any;
    errors: any;
    warnings: any;
    mapped: boolean;
    checked: boolean;
    timePeriods: string[];
    hasErrors: boolean;
    dataPushed: boolean;
    timePeriodObject: {
        StartDate: any;
        EndDate: any;
        Frequencies: any
    };
    IntegrationComment: string;
    succeeded: boolean;
    succsessTimes: any[];
}
export interface DataIntegrationMapping {
    iD: number;
    sourceObjectID: string;
    destinationObjectID: string;
    objectType: number;
    createdBy: any;
    creationDate: any;
    lastModifiedBy: any;
    lastModifiedDate: any
}
export interface DataIntegrationTask {
    DataIntegrationMapping: DataIntegrationMapping;
    Periods: string[];
    Frequency: number;
    IntegrationComment: string
}