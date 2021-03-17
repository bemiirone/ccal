import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IdeasInt } from './../_models/interface';
import { IdeasService } from './../_services/ideas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas-collection',
  templateUrl: './ideas-collection.component.html',
  styleUrls: ['./ideas-collection.component.scss'],
})
export class IdeasCollectionComponent implements OnInit {
  ideas: IdeasInt[];
  idea: string;
  ideaObj: IdeasInt;

  constructor(private ideasService: IdeasService) {}

  ngOnInit(): void {
    this.getIdeas();
  }

  getIdeas(): void {
    this.ideasService.getIdeas().subscribe((ideas) => {
      this.ideas = ideas;
      this.ideas.forEach(idea => idea.isEdit = false);
    });
  }

  addIdea(ev: Event): void {
    this.ideaObj = { id: this.ideas.length + 1, description: this.idea };
    this.ideasService.postIdea(this.ideaObj).subscribe(data => {
      this.ideas.push(this.ideaObj);
      console.log(`Idea ${data.id} added`);
      this.idea = '';
    });
  }

  deleteIdea(index: number): void {
    this.ideasService.deleteIdea(this.ideas[index].id).subscribe(data => {
      this.ideas.splice(index, 1);
      console.log('Successfully deleted');
    });
  }

  editIdea(value: string, index: number): void {
    this.ideaObj = { id: this.ideas[index].id, description: value};
    this.ideas[index].isEdit = false;
    this.ideasService.putIdea(this.ideas[index].id, this.ideaObj).subscribe(data => {
      console.log(`Idea ${data.id} amended`);
    });
  }
}
