import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '@environments/environment';
import { BreakerPriority, BreakerUsage, Breakers, UpdateBreakerMode } from '../api/breakers';

@Injectable()
export class BreakerService {
    baseUrl = `${environment.tokenEndpoint}/breakers`
    constructor(private http: HttpClient) { }

    updateBreakerMode(data: UpdateBreakerMode) {
        return lastValueFrom(this.http.patch<any>(`${this.baseUrl}`, data));
    }

    getBreakers() {
        return lastValueFrom(this.http.get<Breakers[]>(`${this.baseUrl}`));
    }

    updateBreaker(data: Breakers) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}`, data));
    }

    getBreakerUsage(date: string, range: string) {
        return lastValueFrom(this.http.get<BreakerUsage>(`${this.baseUrl}/usage?date=${date}&range=${range}`));
    }

    updateBreakerPriority(data: BreakerPriority) {
        return lastValueFrom(this.http.patch<any>(`${this.baseUrl}/priority`, data));
    }
}
