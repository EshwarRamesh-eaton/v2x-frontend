import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HomeBreakdown, HomeMode, HomeOutage, HomeState, HomeSummary, HomeTrend } from '../api/home';
import { environment } from '@environments/environment';

@Injectable()
export class HomeService {
    baseUrl = `${environment.tokenEndpoint}/home`
    constructor(private http: HttpClient) { }

    getHomeDeviceState() {
        return lastValueFrom(this.http.get<HomeState>(`${this.baseUrl}/devicestate`));
    }

    updateHomeState(data: HomeState) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/devicestate`, data));
    }

    getHomeMode() {
        return lastValueFrom(this.http.get<HomeMode>(`${this.baseUrl}/mode`));
    }
    

    updateHomeMode(data: HomeMode) {
        return lastValueFrom(this.http.put<any>(`${this.baseUrl}/mode`, data));
    }

    getHomeSummary() {
        return lastValueFrom(this.http.get<HomeSummary>(`${this.baseUrl}/summary`));
    }

    getHomeOutage() {
        return lastValueFrom(this.http.get<HomeOutage>(`${this.baseUrl}/outage`));
    }

    getHomeBreakdown(date: string, range: string) {
        return lastValueFrom(this.http.get<HomeBreakdown>(`${this.baseUrl}/breakdown?date=${date}&range=${range}`));
    }

    getHomeTrend() {
        return lastValueFrom(this.http.get<HomeTrend>(`${this.baseUrl}/trend`));
    }


}