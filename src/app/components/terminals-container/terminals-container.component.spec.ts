import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalsContainerComponent } from './terminals-container.component';

describe('TerminalsContainerComponent', () => {
  let component: TerminalsContainerComponent;
  let fixture: ComponentFixture<TerminalsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
