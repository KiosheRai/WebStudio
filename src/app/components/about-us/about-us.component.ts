import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
	arrowIcon = faArrowRight
}
