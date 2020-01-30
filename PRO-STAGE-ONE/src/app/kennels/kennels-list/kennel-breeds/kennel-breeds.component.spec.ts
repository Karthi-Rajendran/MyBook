import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennelBreedsComponent } from './kennel-breeds.component';

describe('KennelBreedsComponent', () => {
  let component: KennelBreedsComponent;
  let fixture: ComponentFixture<KennelBreedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelBreedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
