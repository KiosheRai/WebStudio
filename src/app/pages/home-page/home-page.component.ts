import { Component } from '@angular/core';
import { ProjectsList, PersonsList } from "../../data/ProjectsList";

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
	cards = ProjectsList.filter((u, i) => i < 12)
	personsList = PersonsList.filter((u, i) => i < 12)
}
