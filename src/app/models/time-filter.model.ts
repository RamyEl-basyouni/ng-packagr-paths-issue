export interface Frequencies {
    FrequencyID: string,
    FrequencyName: string,
    IndicatingDate: string,
    StartDate: string,
    EndDate: string
}

export interface TimeFilterStore {
    Filter?: Date,
    YearToDate: Boolean,
    UpdateFrequency: number,
    Frequency: string,
    timeID: string;
    StartDate: Date,
    EndDate: Date,
    SDate: string
}

export interface UpdateFrequency {
    UpdateFrequencyID: number,
    UpdateFrequencyName: string,
    Frequencies?: Frequencies[]
}
export interface TimeFilterModel {
    YearID: number[],
    YearName: string[],
    UpdateFrequency: UpdateFrequency[],
}
export interface TimePeriod {

    isEn: boolean,
    SymbolicDate: string,
    TimeID: number,
    IndicatingDate: Date,
    StartDate: Date,
    EndDate: Date,
    DisplayNameEn: string,
    DisplayNameAr: string,
    id: number,
    text: string
}


export interface TimePeriodsWithFrequency {
    TimePeriods: TimePeriod[],
    Frequency: number,
}

export interface TimePeriodDTO {
    Frequencies: number[],
    StartDate: Date,
    EndDate: Date
}