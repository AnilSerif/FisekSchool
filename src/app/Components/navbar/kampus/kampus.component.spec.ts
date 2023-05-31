/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KampusComponent } from './kampus.component';

describe('KampusComponent', () => {
  let component: KampusComponent;
  let fixture: ComponentFixture<KampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
