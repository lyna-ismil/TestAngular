import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVoitureComponent } from './ajout-voiture.component';

describe('AjoutVoitureComponent', () => {
  let component: AjoutVoitureComponent;
  let fixture: ComponentFixture<AjoutVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutVoitureComponent]
    });
    fixture = TestBed.createComponent(AjoutVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
