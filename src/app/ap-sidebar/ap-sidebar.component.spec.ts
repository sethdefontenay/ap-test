import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApSidebarComponent } from './ap-sidebar.component';

describe('ApSidebarComponent', () => {
  let component: ApSidebarComponent;
  let fixture: ComponentFixture<ApSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
