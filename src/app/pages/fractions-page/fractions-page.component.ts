import { Component } from '@angular/core';
import { ProjectsList as data } from "../../data/ProjectsList";

@Component({
	selector: 'app-fractions-page',
	templateUrl: './fractions-page.component.html',
	styleUrls: ['./fractions-page.component.css']
})
export class FractionsPageComponent {
	cards = data.filter((u, i) => i < 12)
}
