import { HomeSource } from "./home";

export interface PowerSource {
    direction: string;
    type: string;
    power: number;
}

export interface Sources {
    sources: HomeSource[]
}

export interface EnergySource {
    source: HomeSource;
    energy: number;
    rangeStart: Date;
    rangeEnd: Date;
}

export interface EnergySourceTotalUsage {
    totalUsage: string;
}