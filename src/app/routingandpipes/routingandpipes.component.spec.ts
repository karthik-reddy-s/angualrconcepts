import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingandpipesComponent } from './routingandpipes.component';

describe('RoutingandpipesComponent', () => {
  let component: RoutingandpipesComponent;
  let fixture: ComponentFixture<RoutingandpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingandpipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingandpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
