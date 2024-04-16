import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

	form: FormGroup
	submitted: boolean
	message: string

	constructor(public auth: AuthService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params['loginAgain']) {
				this.message = "Повторите вход!"
			}
			else if (params['authFailed']) {
				this.message = "Время жизни вашего токена истекло!"
			}
		})

		this.form = new FormGroup({
			email: new FormControl(null, [
				Validators.email,
				Validators.required,
			]),
			password: new FormControl(null, [
				Validators.minLength(4),
				Validators.maxLength(12),
			]),
			remember: new FormControl(false)
		})
	}

	submit() {
		if (this.form.invalid) {
			return
		}

		this.submitted = true

		const user: User = {
			email: this.form.value.email,
			password: this.form.value.password,
			rememberPassword: this.form.value.remember
		}

		this.auth.login(user).subscribe(() => {
			this.form.reset()
			this.router.navigate(['dashboard'])
			this.submitted = false
		}, () => {
			this.submitted = false
		})
	}
}
