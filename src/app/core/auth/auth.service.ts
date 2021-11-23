import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { BaseApiService } from '../services/base-api.service';
import { UserService } from '../user/user.service';
import { AuthUtils } from './auth.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService {
    private _authenticated: boolean = false;

    constructor(
      private _httpClient: HttpClient,
      private _userService: UserService
    ) 
    {
        super("auth");
    }

    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post(this.getEndpoint('forgot-password'), {email: email});
    }

    resetPassword(password: string, token: string): Observable<any>
    {
        return this._httpClient.post(this.getEndpoint('reset-password'), { password: password, confirmPassword: password, token: token});
    }

    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }        
        return this._httpClient.post(this.getEndpoint('sign-in'), credentials, { withCredentials: true }).pipe(
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = { id:  response.userId, name: response.firstName + ' ' + response.LastName, email: response.email };

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    signInUsingToken(): Observable<any>
    {
        // Renew token
        return this._httpClient.post(this.getEndpoint('refresh-access-token'), { }, { withCredentials: true }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    signUp(user: { firstName: string; lastName: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post(this.getEndpoint('sign-up'), user);
    }

    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
