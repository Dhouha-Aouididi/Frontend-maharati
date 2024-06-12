import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import { FileUploadService } from '../services/fileuploaddemande/file-upload.service';
import { of } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let fileUploadService: FileUploadService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [FileUploadService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fileUploadService = TestBed.inject(FileUploadService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 6 controls', () => {
    expect(component.form.contains('username')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('phone')).toBeTruthy();
    expect(component.form.contains('subject')).toBeTruthy();
    expect(component.form.contains('message')).toBeTruthy();
    expect(component.form.contains('image')).toBeTruthy();
  });

  it('should make username control required', () => {
    let control = component.form.get('username');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make email control required', () => {
    let control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should upload file and set preview', () => {
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const event = { target: { files: [file] } } as unknown as Event;
    component.uploadFile(event);

    expect(component.form.get('image')?.value).toBe(file);
  });

  it('should submit the form and handle the response', () => {
    spyOn(fileUploadService, 'addDemande').and.returnValue(of({
      type: HttpEventType.Response,
      body: { message: 'Demande created successfully!' }
    } as HttpEvent<any>));

    component.submitForm();

    expect(component.message).toBe('Demande created successfully!');
    expect(component.percentDone).toBeFalsy();
  });

  it('should reset the form and clear the preview', () => {
    component.clearForm();
    expect(component.form.get('username')?.value).toBe('');
    expect(component.form.get('email')?.value).toBe('');
    expect(component.form.get('phone')?.value).toBe('');
    expect(component.form.get('subject')?.value).toBe('');
    expect(component.form.get('message')?.value).toBe('');
    expect(component.form.get('image')?.value).toBeNull();
    expect(component.preview).toBeUndefined();
    expect(component.percentDone).toBe(0);
  });
});
