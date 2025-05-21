import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvm01Component } from './lvm01.component';

describe('Lvm01Component', () => {
  let component: Lvm01Component;
  let fixture: ComponentFixture<Lvm01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvm01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
