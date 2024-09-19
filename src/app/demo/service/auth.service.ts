import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { lastValueFrom } from 'rxjs';
// import { ForgotPasswordModel } from './models/forgot-password.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanLoad, CanActivate, CanActivateChild {
  refreshTokenTimeout: any;
  constructor(private router: Router, private http: HttpClient) {
    if (this.access_token) {
      this.startRefreshTokenTimer(this.access_token)
    }
  }

  userLogin(u: string, p: string, headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.post(`${environment.tokenEndpoint}/auth/login`, {username: u, password: p}, {headers}))
  }

  userLogout(headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.get(`${environment.tokenEndpoint}/auth/logout`, {headers}))
  }

  refreshToken(headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.post(`${environment.tokenEndpoint}/auth/refresh`, {headers}))
  }

  updateEula(headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.patch(`${environment.tokenEndpoint}/update-eula`,{id: this.user_id}, {headers}))
  }

  forgotPassword(data: any, headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.patch(`${environment.tokenEndpoint}/forgot-password`, data, {headers}))
  }

  async login(u: string, p: string, headers?: HttpHeaders): Promise<void> {
    return this.userLogin(u, p, headers).then((resp) => {
        this.setAccessToken(resp.accessToken);
        this.setRefreshToken(resp.refreshToken);
        this.startRefreshTokenTimer(resp.accessToken);
        return resp;
    })
  }

  // TODO: Remove this method once link is established to the backend
  bypassLogin() {
    this.setAccessToken('abc');
    this.setUserId('abc');
    this.setUserRole('admin');
    this.navToDashboard();
  }

  setEula(eula) {
    sessionStorage.setItem('eula', eula);
  }

  async logout(redirect: boolean = true): Promise<void> {
    this.userLogout();
    sessionStorage.clear();
    this.stopRefreshTokenTimer();
    if (redirect) {
      await this.navToLogin();
    }
  }

  async navToLogin(): Promise<void> {
    await this.router.navigateByUrl('login');
  }

  async navToDashboard(): Promise<void> {
      await this.router.navigate(['core/dashboard']);
  }

  async navToChangePassword(): Promise<void> {
    await this.router.navigate(['core/user/change-password']);
  }

  get user_id(): string {
    const userId = sessionStorage.getItem('user_id');
    return userId !== null ? userId : '';
  }

  get user_role(): string {
    const userRole = sessionStorage.getItem('user_role');
    return userRole !== null ? userRole : '';
  }

  get access_token(): string {
    const accessToken = sessionStorage.getItem('accessToken');
    return accessToken !== null ? accessToken : '';
  }

  get refresh_token(): string {
    const refreshToken = sessionStorage.getItem('refreshToken');
    return refreshToken !== null ? refreshToken : '';
  }

  get isAuthenticated(): boolean {
    return this.access_token ? true : false;
  }

  get eula(): string {
    const eula = sessionStorage.getItem('eula');
    return eula !== null ? eula : 'false';
  }

  get theme(): string {
    const theme = sessionStorage.getItem('theme');
    return theme;
  }

  get username(): string {
    const username = sessionStorage.getItem('username');
    return username;
  }


  private setUserId(userId: string) {
    sessionStorage.setItem('user_id', userId);
  }

  private setUsername(username: string) {
    sessionStorage.setItem('username', username);
  }

  private setUserRole(role: string) {
    sessionStorage.setItem('user_role', role);
  }

  private setAccessToken(token: string) {
    sessionStorage.setItem('accessToken', token);
  }

  private setRefreshToken(token: string) {
    sessionStorage.setItem('refreshToken', token);
  }

  private startRefreshTokenTimer(authToken) {
    // parse json object from base64 encoded jwt token
    const jwtBase64 = authToken.split('.')[1];
    const jwtToken = JSON.parse(atob(jwtBase64));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => {
      this.refreshToken()
      .then((resp) => {
        this.setAccessToken(resp.accessToken);
        this.setRefreshToken(resp.refreshToken);
        this.startRefreshTokenTimer(resp.accessToken);
      })
    }, timeout);
}

private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
}

  async canActivate(): Promise<boolean> {
    if (!this.isAuthenticated) {
      await this.logout();
      return false;
    }
    return true;
  }

  async canLoad(): Promise<boolean> {
    if (!this.isAuthenticated) {
      await this.logout();
      return false;
    }
    return true;
  }

  async canActivateChild(): Promise<boolean> {
    if (!this.isAuthenticated) {
      await this.logout();
      return false;
    }
    return true;
  }
}
