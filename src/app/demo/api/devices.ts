export interface Device {
    uuid: string;
    name: string;
    isEnabled?: boolean;
    state: any;
    type: string;
    critical: boolean;
    id?: string;
}

export interface Devices {
    count: number;
    devices: Device[]
}

export interface DeviceUsage {
    uuid: string;
    name: string;
    date: Date;
    percentAmount: number;
}

export interface DeviceState {
    state: string;
}

export enum DeviceType {
    source = 'Source',
    breaker = 'Breaker',
    mid = 'MID'
}

export enum DeviceStateValue {
    on = 'ON',
    off = 'OFF'
}
