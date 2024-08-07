export interface HomeTrend {
    id: string;
}

export interface HomeBreakdown {
    breakdown: {
        id: string;
    }
}


export interface HomeOutage {
    outage: string;
}

export interface HomeSummary {
    homeState: string;
    gridState: string;
    breakersInUse: number;
    breakersTotal: number;
    dailyUsage: number;
    devicesInUse: number;
    devicesTotal: number;
    sourcesRemaining: HomeSourceRemaining[]
  }

  export interface HomeSource {
    id: string;
    name: string;
    type: string;
    minimumCharge: number;
  }

  export interface HomeSourceRemaining {
    source: HomeSource;
    timeRemaining: number;
    stateOfCharge: number;
  }

  export interface HomeMode {
    mode: string;
  }

  export interface HomeState {
    state: string;
  }