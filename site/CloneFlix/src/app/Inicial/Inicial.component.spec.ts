/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InicialComponent } from './Inicial.component';

describe('InicialComponent', () => {
  let component: InicialComponent;
  let fixture: ComponentFixture<InicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
