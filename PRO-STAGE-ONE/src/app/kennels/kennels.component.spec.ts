import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennelsComponent } from './kennels.component';

describe('KennelsComponent', () => {
  let component: KennelsComponent;
  let fixture: ComponentFixture<KennelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
