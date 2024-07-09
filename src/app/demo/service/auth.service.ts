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
  }

  userLogin(u: string, p: string, headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.post(`${environment.tokenEndpoint}/auth`, {username: u, password: p}, {headers}))
  }

  userLogout(headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.post(`${environment.tokenEndpoint}/logout`,{id: this.user_id}, {headers}))
  }

  updateEula(headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.patch(`${environment.tokenEndpoint}/update-eula`,{id: this.user_id}, {headers}))
  }

  forgotPassword(data: any, headers?: HttpHeaders): Promise<any> {
    return lastValueFrom(this.http.patch(`${environment.tokenEndpoint}/forgot-password`, data, {headers}))
  }

  async login(u: string, p: string, headers?: HttpHeaders): Promise<void> {
    return this.userLogin(u, p, headers).then((resp) => {
        this.setEula(resp.eula === 1 || '1' ? 'true': 'false');
        this.setAccessToken(resp.token);
        this.setUserId(resp.user.id);      
        this.setUsername(resp.user.username);  
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
    console.log(eula)
    sessionStorage.setItem('eula', eula);
  }

  async logout(redirect: boolean = true): Promise<void> {
    this.userLogout();
    sessionStorage.clear();
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

  get isAuthenticated(): boolean {
    return this.access_token && this.user_id ? true : false;
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
