import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaveAdminComponent } from './viewleave-admin.component';

describe('ViewleaveAdminComponent', () => {
  let component: ViewleaveAdminComponent;
  let fixture: ComponentFixture<ViewleaveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleaveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleaveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
