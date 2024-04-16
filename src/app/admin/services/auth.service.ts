import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, Subject, tap, throwError } from "rxjs";
import { User } from 'src/app/models/User';
import { FbAuthResponse } from 'src/app/models/FbAuthResponse';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public error$: Subject<string> = new Subject<string>()

	constructor(private http: HttpClient) { }

	get token(): string | null {
		const localExp = localStorage.getItem('fb-token-exp')
		const sessionToken = sessionStorage.getItem('fb-token')

		if (localExp === null && sessionToken !== null) {
			return sessionToken
		}

		const expDate = new Date(localExp!)
		if (new Date() > expDate) {
			this.logout()
			return null
		}
		return localStorage.getItem('fb-token')!;
	}

	login(user: User): Observable<any> {
		user.returnSecureToken = true
		return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
			.pipe(
				tap(response => this.setToken(response, user.rememberPassword!)),
				catchError(this.handError.bind(this))
			)
	}

	logout() {
		this.setToken(null, false)
	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	private handError(error: HttpErrorResponse): Observable<never> {
		const { message } = error.error.error

		switch (message) {
			case 'INVALID_EMAIL':
				this.error$.next('Неверный email')
				break;
			case 'INVALID_PASSWORD':
				this.error$.next('Неверный пароль')
				break;
			case 'EMAIL_NOT_FOUND':
				this.error$.next('Такого email нет')
				break;

		}
		return throwError(error)
	}

	private setToken(response: FbAuthResponse | null, remember: boolean) {
		if (response) {
			if (remember) {
				const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
				localStorage.setItem('fb-token', response.idToken)
				localStorage.setItem('fb-token-exp', expDate.toString())
			}
			else {
				sessionStorage.setItem('fb-token', response.idToken)
			}
		}
		else {
			localStorage.clear()
			sessionStorage.clear()
		}
	}
}
