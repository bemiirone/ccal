import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasCollectionComponent } from './ideas-collection.component';

describe('IdeasCollectionComponent', () => {
  let component: IdeasCollectionComponent;
  let fixture: ComponentFixture<IdeasCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
