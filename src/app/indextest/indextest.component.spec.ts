/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndextestComponent } from './indextest.component';

describe('IndextestComponent', () => {
  let component: IndextestComponent;
  let fixture: ComponentFixture<IndextestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
