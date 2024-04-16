import { Component } from '@angular/core';
import { faArrowDown as arrow } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-start-with',
	templateUrl: './start-with.component.html',
	styleUrls: ['./start-with.component.css']
})
export class StartWithComponent {
	arrowDown = arrow
}
