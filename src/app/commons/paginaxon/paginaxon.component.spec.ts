import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaxonComponent } from './paginaxon.component';

describe('PaginaxonComponent', () => {
  let component: PaginaxonComponent;
  let fixture: ComponentFixture<PaginaxonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaxonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
