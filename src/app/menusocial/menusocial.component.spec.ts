import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusocialComponent } from './menusocial.component';

describe('MenusocialComponent', () => {
  let component: MenusocialComponent;
  let fixture: ComponentFixture<MenusocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
