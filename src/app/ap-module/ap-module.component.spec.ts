import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApModuleComponent } from './ap-module.component';

describe('ApModuleComponent', () => {
  let component: ApModuleComponent;
  let fixture: ComponentFixture<ApModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
