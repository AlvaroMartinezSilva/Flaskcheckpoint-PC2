import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaNgforYNgifComponent } from './prueba-ngfor-y-ngif.component';

describe('PruebaNgforYNgifComponent', () => {
  let component: PruebaNgforYNgifComponent;
  let fixture: ComponentFixture<PruebaNgforYNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaNgforYNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaNgforYNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
