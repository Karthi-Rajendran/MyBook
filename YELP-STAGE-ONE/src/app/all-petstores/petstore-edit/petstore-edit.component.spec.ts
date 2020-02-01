import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetstoreEditComponent } from './petstore-edit.component';

describe('PetstoreEditComponent', () => {
  let component: PetstoreEditComponent;
  let fixture: ComponentFixture<PetstoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetstoreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetstoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
