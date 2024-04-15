import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Projects';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() entity: Project

	ProjectCard: Project

	ngOnInit() {
		this.ProjectCard = { ...this.entity }
	}
}
