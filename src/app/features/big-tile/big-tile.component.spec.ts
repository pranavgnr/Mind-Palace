import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTileComponent } from './big-tile.component';

describe('BigTileComponent', () => {
  let component: BigTileComponent;
  let fixture: ComponentFixture<BigTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
