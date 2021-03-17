import { Observable } from 'rxjs';
import { IdeasInt } from './../_models/interface';
import { IdeasService } from './../_services/ideas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas-collection',
  templateUrl: './ideas-collection.component.html',
  styleUrls: ['./ideas-collection.component.scss']
})
export class IdeasCollectionComponent implements OnInit {

  ideas$: Observable<IdeasInt[]>;

  constructor(private ideasService: IdeasService) { }

  ngOnInit(): void {
    this.getIdeas();
  }

  getIdeas(): void {
      const ideas = this.ideasService.getIdeas();
      this.ideas$ = ideas;
  }

}
