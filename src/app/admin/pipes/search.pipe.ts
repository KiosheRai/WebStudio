import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/models/Projects';

@Pipe({
	name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {

	transform(posts: Project[], value: string,): Project[] {
		if (!value.trim()) {
			return posts
		}

		return posts.filter(post => {
			return post.name.toLowerCase().includes(value.toLowerCase())
		})
	}
}
