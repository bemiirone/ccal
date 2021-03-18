import { TestBed } from '@angular/core/testing';
import { IdeasService } from './ideas.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('IdeasService', () => {
  let service: IdeasService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IdeasService],
    });
    service = TestBed.inject(IdeasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
