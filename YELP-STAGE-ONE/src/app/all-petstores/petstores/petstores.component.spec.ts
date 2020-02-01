import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetstoresComponent } from './petstores.component';

describe('PetstoresComponent', () => {
  let component: PetstoresComponent;
  let fixture: ComponentFixture<PetstoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetstoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
