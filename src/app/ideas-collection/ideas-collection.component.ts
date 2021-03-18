import { IdeasInt } from './../_models/interface';
import { IdeasService } from './../_services/ideas.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ideas-collection',
  templateUrl: './ideas-collection.component.html',
  styleUrls: ['./ideas-collection.component.scss'],
})
export class IdeasCollectionComponent implements OnInit {
  ideas: IdeasInt[];
  idea: string;
  ideaObj: IdeasInt;

  constructor(
    private ideasService: IdeasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getIdeas();
  }

  getIdeas(): void {
    this.ideasService.getIdeas().subscribe((ideas) => {
      this.ideas = ideas;
      this.ideas.forEach((idea) => (idea.isEdit = false));
    });
  }

  addIdea(): void {
    if (this.idea) {
      this.ideaObj = { id: this.ideas.length + 1, description: this.idea };
      this.ideasService.postIdea(this.ideaObj).subscribe((data) => {
        this.toastr.success(`Idea ${data.id} added`);
      });
      this.ideas.push(this.ideaObj);
      this.idea = '';
    }
  }

  deleteIdea(index: number): void {
    this.ideasService.deleteIdea(this.ideas[index].id).subscribe(() => {
      this.toastr.success('Successfully Deleted');
    });
    this.ideas.splice(index, 1);
  }

  editIdea(value: string, index: number): void {
    this.ideaObj = { id: this.ideas[index].id, description: value };
    this.ideas[index].isEdit = false;
    this.ideasService
      .putIdea(this.ideas[index].id, this.ideaObj)
      .subscribe((data) => {
        this.toastr.success(`Idea ${data.id} amended`);
      });
  }
}
