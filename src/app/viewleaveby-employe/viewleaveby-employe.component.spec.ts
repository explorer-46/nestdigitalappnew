import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleavebyEmployeComponent } from './viewleaveby-employe.component';

describe('ViewleavebyEmployeComponent', () => {
  let component: ViewleavebyEmployeComponent;
  let fixture: ComponentFixture<ViewleavebyEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleavebyEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleavebyEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
