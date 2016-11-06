/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SdktestComponent } from './sdktest.component';

describe('SdktestComponent', () => {
  let component: SdktestComponent;
  let fixture: ComponentFixture<SdktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdktestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
