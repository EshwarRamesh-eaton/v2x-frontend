import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HomeBreakdown, HomeMode, HomeOutage, HomeState, HomeSummary, HomeTrend } from '../api/home';
import { EnergySource, EnergySourceTotalUsage, PowerSource, Sources } from '../api/source';
import { environment } from '@environments/environment';

@Injectable()
export class SourceService {
    baseUrl = `${environment.tokenEndpoint}/sources`
    constructor(private http: HttpClient) { }

    getTimeRemaining() {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}/time-remaining`));
    }

    getSourcePower() {
        return lastValueFrom(this.http.get<PowerSource[]>(`${this.baseUrl}/power`));
    }
    

    getSources() {
        return lastValueFrom(this.http.get<Sources>(`${this.baseUrl}`));
    }

    getTotalSourceEnergy(range: string) {
        return lastValueFrom(this.http.get<EnergySourceTotalUsage>(`${this.baseUrl}/energy/total?range=${range}`));
    }

    getSourceEnergy(range: string) {
        return lastValueFrom(this.http.get<EnergySource>(`${this.baseUrl}/energy?range=${range}`));
    }


}