export interface Device {
    uuid: string
    name: string
    isEnabled: boolean
    state: boolean
    type: string
    critical: boolean
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

export enum DeviceStateValue {
    connected = 'CONNECTED',
    islanded = 'ISLANDED'
}