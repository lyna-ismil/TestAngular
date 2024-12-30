import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationVoitureComponent } from './modification-voiture.component';

describe('ModificationVoitureComponent', () => {
  let component: ModificationVoitureComponent;
  let fixture: ComponentFixture<ModificationVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationVoitureComponent]
    });
    fixture = TestBed.createComponent(ModificationVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
