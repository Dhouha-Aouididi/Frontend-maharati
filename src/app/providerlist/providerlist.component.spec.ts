import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderlistComponent } from './providerlist.component';

describe('ProviderlistComponent', () => {
  let component: ProviderlistComponent;
  let fixture: ComponentFixture<ProviderlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderlistComponent]
    });
    fixture = TestBed.createComponent(ProviderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
