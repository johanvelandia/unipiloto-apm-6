import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesDetailComponent } from './estudiantes-detail.component';

describe('EstudiantesDetailComponent', () => {
  let component: EstudiantesDetailComponent;
  let fixture: ComponentFixture<EstudiantesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
