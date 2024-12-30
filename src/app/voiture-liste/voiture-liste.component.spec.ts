import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureListeComponent } from './voiture-liste.component';

describe('VoitureListeComponent', () => {
  let component: VoitureListeComponent;
  let fixture: ComponentFixture<VoitureListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureListeComponent]
    });
    fixture = TestBed.createComponent(VoitureListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
