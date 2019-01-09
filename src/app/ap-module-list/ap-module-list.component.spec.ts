import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApModuleListComponent } from './ap-module-list.component';

describe('ApModuleListComponent', () => {
  let component: ApModuleListComponent;
  let fixture: ComponentFixture<ApModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApModuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
