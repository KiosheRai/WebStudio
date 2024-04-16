import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project } from '../models/Projects';
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor(private _http: HttpClient) { }

	// create(post: Project): Observable<Project> {
	// 	return this.http.post<any>(`${environment.fbDbUrl}/posts.json`, post)
	// 		.pipe(map((response: IFbCreateResponse) => {
	// 			const newPost: Project = {
	// 				...post,
	// 				id: response.name,
	// 				date: new Date(post.date)
	// 			}
	// 			return newPost
	// 		}))
	// }

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

	// getById(id: string): Observable<Project> {
	// 	return this.http.get<Project>(`${environment.fbDbUrl}/posts/${id}.json`)
	// 		.pipe(map((post: Project) => {
	// 			const newPost: Project = {
	// 				...post, id,
	// 				date: new Date(post.date)
	// 			}
	// 			return newPost
	// 		}))
	// }

	// delete(id: string): Observable<void> {
	// 	return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`)
	// }

	// update(post: Project): Observable<Project> {
	// 	return this.http.patch<IPost>(`${environment.fbDbUrl}/posts/${post.id!}.json`, post)
	// }
}
