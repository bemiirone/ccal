import { TestDB } from './../test-db';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeasCollectionComponent } from './ideas-collection.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { IdeasService } from '../_services/ideas.service';
import { ToastrModule } from 'ngx-toastr';
import { DebugElement } from '@angular/core';

describe('IdeasCollectionComponent', () => {
  let component: IdeasCollectionComponent;
  let fixture: ComponentFixture<IdeasCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [IdeasService],
      declarations: [IdeasCollectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should load ideas', () => {
    component.ideas = TestDB.ideas;
    expect(component.ideas.length).toEqual(3);
  });
  it('Should add an ideas', () => {
    const ideas = [
      { id: 1, description: 'This is my first idea ' },
      { id: 2, description: 'This is my second idea to date' },
      { id: 3, description: 'This my third idea' },
    ];
    component.ideas = ideas;
    component.idea = 'This my forth idea'
    component.addIdea();
    expect(ideas.length).toEqual(4);
    console.log(ideas)
  });

  it('Should delete an ideas', () => {
    const ideas = [
      { id: 1, description: 'This is my first idea ' },
      { id: 2, description: 'This is my second idea to date' },
      { id: 3, description: 'This my third idea' },
    ];
    component.ideas = ideas;
    component.deleteIdea(2);
    expect(ideas.length).toEqual(2)
    console.log(ideas)
  });

  xit('Should edit an ideas', () => {
    const ideas = [
      { id: 1, description: 'This is my first idea ' },
      { id: 2, description: 'This is my second idea to date' },
      { id: 3, description: 'This my third idea' },
    ];
    component.ideas = ideas;
    component.editIdea('Now this is the second idea', 1);
    expect(ideas[1].description).toBe('Now this is the second idea')
    console.log(ideas);
  });

});
