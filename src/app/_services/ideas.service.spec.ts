import { TestDB } from './../test-db';
import { TestBed } from '@angular/core/testing';
import { IdeasService } from './ideas.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('IdeasService', () => {
  let service: IdeasService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IdeasService],
    });
    service = TestBed.inject(IdeasService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retrieve all ideas', () => {
    service.getIdeas().subscribe(ideas => {
      expect(ideas).toBeTruthy('No ideas returned');
      expect(ideas.length).toBe(3, 'incorrect number of ideas');
    });

    const req = httpTestingController.expectOne('http://localhost:3000/ideas');
    expect(req.request.method).toEqual('GET');
    req.flush(TestDB.ideas);
  });

  it('Add new Idea', () => {
    const http = TestBed.inject(HttpTestingController);
    const addObject = {id: 4, description: 'This is my forth idea to date'}
    let postResponse;
    service.postIdea(addObject).subscribe((response) => {
      postResponse = response;
    });

    http.expectOne({
      url: 'http://localhost:3000/ideas',
      method: 'POST'
    }).flush(TestDB.ideas);
    expect(postResponse).toEqual(TestDB.ideas)
  });

  it('Update Idea', () => {
    const http = TestBed.inject(HttpTestingController);
    const addObject = {id: 4, description: 'This is my forth idea to date'}
    let getResponse;
    service.putIdea(4, addObject).subscribe((response) => {
      getResponse = response;
    });

    http.expectOne({
      url: 'http://localhost:3000/ideas/4',
      method: 'PUT'
    }).flush(TestDB.ideas);
    expect(getResponse).toEqual(TestDB.ideas);
  });
  it('Delete Idea', () => {
    const http = TestBed.inject(HttpTestingController);
    let getResponse;
    service.deleteIdea(4).subscribe((response) => {
      getResponse = response;
    });

    http.expectOne({
      url: 'http://localhost:3000/ideas/4',
      method: 'DELETE'
    }).flush(TestDB.ideas);
    expect(getResponse).toEqual(TestDB.ideas);
  });

});
