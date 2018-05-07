import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleForm } from './simple-form.component';

xdescribe('SimpleFormComponent', () => {
  let component: SimpleForm;
  let fixture: ComponentFixture<SimpleForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
