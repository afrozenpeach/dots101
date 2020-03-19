import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObituaryContainerComponent } from './obituary-container.component';

describe('ObituaryContainerComponent', () => {
  let component: ObituaryContainerComponent;
  let fixture: ComponentFixture<ObituaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObituaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObituaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
