import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class BreakerService {
    baseUrl = `eaton`
    constructor(private http: HttpClient) { }

    getAllDevices() {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}/devices`));
    }

    getDeviceById(id: any) {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}/devices/${id}`));
    }


    getDeviceState(id: any) {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}/devices/${id}/evse/metadata/state`));
    }

    setUdpkey() {}
}
