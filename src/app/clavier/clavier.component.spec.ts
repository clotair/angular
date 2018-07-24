import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClavierComponent } from './clavier.component';

describe('ClavierComponent', () => {
  let component: ClavierComponent;
  let fixture: ComponentFixture<ClavierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClavierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClavierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
