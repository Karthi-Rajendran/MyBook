import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennelsListComponent } from './kennels-list.component';

describe('KennelsListComponent', () => {
  let component: KennelsListComponent;
  let fixture: ComponentFixture<KennelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
