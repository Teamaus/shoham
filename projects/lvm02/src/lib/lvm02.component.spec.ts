import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvm02Component } from './lvm02.component';

describe('Lvm02Component', () => {
  let component: Lvm02Component;
  let fixture: ComponentFixture<Lvm02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvm02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvm02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
