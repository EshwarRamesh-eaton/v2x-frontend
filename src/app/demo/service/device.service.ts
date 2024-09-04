import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, ReplaySubject } from 'rxjs';
import { DeviceUsage, Device } from '../api/devices';

@Injectable()
export class DeviceService {
    baseUrl = `api/devices`
    private deviceData$ = new ReplaySubject<any>(1);
    private showDeviceFullInfo$ = new ReplaySubject<any>(1); 
    constructor(private http: HttpClient) { }

    // TODO: Device Info has to be set a type
    deviceData(deviceData: any) {
        this.deviceData$.next(deviceData)
    }

    showInfoVariable(toggle) {
        this.showDeviceFullInfo$.next(toggle);
    }

    get deviceFullData() {
        return this.deviceData$.asObservable();
    }

    get showInfo() {
        return this.showDeviceFullInfo$.asObservable();
    }

    getDevices() {
        return lastValueFrom(this.http.get<Device[]>(`${this.baseUrl}`));
    }

    getDevicesById(id: string) {
        return lastValueFrom(this.http.get<Device>(`${this.baseUrl}/${id}`));
    }

    //TODO: there is a PUT and a PATCH call -> see what is required here later

    updateDeviceById(id: string, data: any) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/${id}`, data));
    }

    patchDeviceById(id: string, data: any) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/${id}`, data));
    }


    getDeviceEnergy() {
        return lastValueFrom(this.http.get<DeviceUsage>(`${this.baseUrl}/energy`));
    }


}
