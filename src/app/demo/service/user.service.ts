import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../api/user';

@Injectable()
export class UserService {
    baseUrl = `api/users`
    constructor(private http: HttpClient) { }

    getCurrentUser() {
        return lastValueFrom(this.http.get<User>(`${this.baseUrl}/current`));
    }

}
