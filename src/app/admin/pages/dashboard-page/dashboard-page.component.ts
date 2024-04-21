import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Project } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';
import { AlertService } from '../../services/alert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

	posts: Project[]
	pSub: Subscription
	dSub: Subscription
	searchStr = ''
	alertMessage = false
	form: FormGroup

	constructor(private projectService: ProjectService,
		private alert: AlertService) {
		this.form = new FormGroup({
			name: new FormControl(null, [
				Validators.required,
				Validators.maxLength(32)
			]),
			description: new FormControl(null, [
				Validators.required,
				Validators.maxLength(255)
			]),
			imageUri: new FormControl(null, [
				Validators.required,
				Validators.maxLength(255)
			])
		})
	}

	ngOnInit(): void {
		this.pSub = this.projectService
			.getAll()
			.subscribe(posts => {
				this.posts = posts
			})
	}

	ngOnDestroy(): void {
		if (this.pSub) {
			this.pSub.unsubscribe()
		}
		if (this.dSub) {
			this.dSub.unsubscribe()
		}
	}

	removePost(id: string) {
		this.dSub = this.projectService.delete(id)
			.subscribe(() => {
				this.posts = this.posts.filter(post => post.id !== id)

				this.alert.danger('The post has been deleted')
			})
	}

	submit() {
		if (this.form.invalid) {
			return
		}

		const post: Project = {
			name: this.form.value.name,
			description: this.form.value.description,
			urlPicture: this.form.value.imageUri,
		}

		this.projectService.create(post)
			.subscribe(res => {
				this.form.reset()
				this.alert.success('Your post was successfully created.')
			})
	}
}
