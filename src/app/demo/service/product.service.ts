import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductService {
    baseUrl = `api`
    constructor(private http: HttpClient) { }

    getRelayStatus() {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}/trigger-relay`));
    }

    updateRelay(data: any) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/trigger-relay`, data));
    }

    togglePowerSupply(data: any) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/power-supply`, data));
    }

    getTemperatureReading() {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}/temperature`));
    }

    updateOperationMode(data: any) {
        return lastValueFrom(this.http.patch<any>(`${this.baseUrl}/operation-mode`, data));
    }
}
