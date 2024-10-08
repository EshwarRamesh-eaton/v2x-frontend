
// TODO: Confirm Breaker Usage since it has the range and date in the response - need to confirm
export interface BreakerUsage {
      name: string;
      datapoints: string;
      activeLoads: number;
      todaysUsage: number;
      previousDayUsage: number;
}

export interface BreakerUsageDateRange {
    date: string;
    range: {
        range: string;
    }
}


export interface Breakers {
    critical: boolean;
    name: string;
    uuid: string;
    priority: number;
    loadPower: number;
    current: number;
    voltage: number;
    timestamp: Date;
    remoteContactState: boolean;
    tripState: boolean;
    tripReason: string;
}


export interface UpdateBreakerMode {
    uuid: string;
    mode: string;
}

export interface BreakerPriority {
    uuid: string;
    name: string;
    priority: number;
}