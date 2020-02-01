import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetstoresComponent } from './all-petstores.component';

describe('AllPetstoresComponent', () => {
  let component: AllPetstoresComponent;
  let fixture: ComponentFixture<AllPetstoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPetstoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPetstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
