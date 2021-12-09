import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DankImgComponent } from './dank-img.component';

describe('DankImgComponent', () => {
  let component: DankImgComponent;
  let fixture: ComponentFixture<DankImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DankImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DankImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
