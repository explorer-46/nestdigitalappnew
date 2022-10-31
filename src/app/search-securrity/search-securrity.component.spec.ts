import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSecurrityComponent } from './search-securrity.component';

describe('SearchSecurrityComponent', () => {
  let component: SearchSecurrityComponent;
  let fixture: ComponentFixture<SearchSecurrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSecurrityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSecurrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
