import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BreakerPriority, BreakerUsage, Breakers, UpdateBreaker } from '../api/breakers';

@Injectable()
export class BreakerService {
    baseUrl = `api/breakers`
    constructor(private http: HttpClient) { }

    updateBreakers(data: UpdateBreaker[]) {
        return lastValueFrom(this.http.patch<any>(`${this.baseUrl}`, data));
    }

    getBreakers() {
        return lastValueFrom(this.http.get<Breakers>(`${this.baseUrl}`));
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
