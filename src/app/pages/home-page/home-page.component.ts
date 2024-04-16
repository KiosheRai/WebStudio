import { Project } from 'src/app/models/Projects';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsList, PersonsList } from "../../data/ProjectsList";

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

	projects: Project[] | null

	constructor(public pJ: ProjectService) {
	}

	ngOnInit(): void {
		this.pJ.getAll().subscribe(x => this.projects = x);
	}

	cards = ProjectsList.filter((u, i) => i < 12)
	personsList = PersonsList.filter((u, i) => i < 12)


}
