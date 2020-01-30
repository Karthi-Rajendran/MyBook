import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennelDetailComponent } from './kennel-detail.component';

describe('KennelDetailComponent', () => {
  let component: KennelDetailComponent;
  let fixture: ComponentFixture<KennelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
