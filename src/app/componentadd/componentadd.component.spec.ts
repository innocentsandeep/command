import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentaddComponent } from './componentadd.component';

describe('ComponentaddComponent', () => {
  let component: ComponentaddComponent;
  let fixture: ComponentFixture<ComponentaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
