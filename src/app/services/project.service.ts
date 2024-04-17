import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project } from '../models/Projects';
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { FbCreateResponse } from '../models/FbCreateProjectResponse';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor(private _http: HttpClient) { }

	create(post: Project): Observable<Project> {
		return this._http.post<any>(`${environment.firebaseUri}/Projects.json`, post)
			.pipe(map((response: FbCreateResponse) => {
				const newPost: Project = {
					...post,
					id: response.name,
				}
				return newPost
			}))
	}

	getAll(): Observable<Project[]> {
		return this._http.get<Project[]>(`${environment.firebaseUri}/Projects.json`)
			.pipe(map((response: { [key: string]: any }) => {
				if (response) {
					return Object.keys(response)
						.map(key => ({
							...response[key],
							id: key,
							date: new Date(response[key].date)
						}))
				}
				else {
					return []
				}
			}))
	}

	getById(id: string): Observable<Project> {
		return this._http.get<Project>(`${environment.firebaseUri}/Projects/${id}.json`)
			.pipe(map((post: Project) => {
				const newPost: Project = {
					...post, id,
				}
				return newPost
			}))
	}

	delete(id: string): Observable<void> {
		return this._http.delete<void>(`${environment.firebaseUri}/Projects/${id}.json`)
	}

	update(post: Project): Observable<Project> {
		return this._http.patch<Project>(`${environment.firebaseUri}/Projects/${post.id!}.json`, post)
	}
}
