import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Devices } from '../api/devices';

@Injectable()
export class DeviceService {
    baseUrl = `api/devices`
    constructor(private http: HttpClient) { }

    getDevices() {
        return lastValueFrom(this.http.get<Devices[]>(`${this.baseUrl}`));
    }

    getDevicesById(id: string) {
        return lastValueFrom(this.http.get<Devices>(`${this.baseUrl}/${id}`));
    }

    //TODO: there is a PUT and a PATCH call -> see what is required here later

    updateDeviceById(id: string, data: any) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/${id}`, data));
    }

    patchDeviceById(id: string, data: any) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/${id}`, data));
    }


    getDeviceEnergy() {
        return lastValueFrom(this.http.get<Devices>(`${this.baseUrl}/energy`));
    }


}
