/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnightOwlAppComponent } from './KnightOwlApp.component';

describe('KnightOwlAppComponent', () => {
  let component: KnightOwlAppComponent;
  let fixture: ComponentFixture<KnightOwlAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightOwlAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightOwlAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
