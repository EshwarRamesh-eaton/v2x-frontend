import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../api/user';
import { environment } from '@environments/environment';

@Injectable()
export class UserService {
    baseUrl = `${environment.tokenEndpoint}/users`
    constructor(private http: HttpClient) { }

    getCurrentUser() {
        return lastValueFrom(this.http.get<User>(`${this.baseUrl}/current`));
    }

}
