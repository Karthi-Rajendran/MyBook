import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetstoreCreateComponent } from './petstore-create.component';

describe('PetstoreCreateComponent', () => {
  let component: PetstoreCreateComponent;
  let fixture: ComponentFixture<PetstoreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetstoreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetstoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
