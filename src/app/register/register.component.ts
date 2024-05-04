import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
form: any = {
  username: null,
  email: null,
  password: null,
  address: null,
  phone: null,
  profile_image: null
};
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';


constructor(private authService: AuthService, private toastr: ToastrService) { }

ngOnInit(): void {
}

// onSubmit(): void {
//   const { username, email, password, address, phone, profile_image} = this.form;

//   this.authService.register(username, email, password, address, phone, profile_image).subscribe({
//     next: data => {
//       console.log(data);
//       this.isSuccessful = true;
//       this.isSignUpFailed = false;
//       this.toastr.success('Registration successful!', 'Success');


//     },
//     error: err => {
//       this.errorMessage = err.error.message;
//       this.isSignUpFailed = true;

//     }
//   });
// }

// }
onSubmit(): void {
  const { username, email, password, address, phone, profile_image} = this.form;

  this.authService.register(username, email, password, address, phone, profile_image).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.toastr.success('Registration successful!', 'Success'); // Display success notification
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      this.toastr.error('Registration failed!', 'Error'); // Display error notification
    }
  });
}
}


// import { Component } from '@angular/core';
// import { AuthService } from '../_services/auth/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   form: any = {
//     username: null,
//     email: null,
//     password: null,
//     address: null,
//     phone: null,
//     profile_image: []
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';

//   constructor(private authService: AuthService) { }

//   onSubmit(): void {
//     const formData = new FormData();
//     formData.append('username', this.form.username);
//     formData.append('email', this.form.email);
//     formData.append('password', this.form.password);
//     formData.append('address', this.form.address);
//     formData.append('phone', this.form.phone);
//     formData.append('profile_image', this.form.profile_image);

//     this.authService.register(formData).subscribe({
//       next: data => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//       },
//       error: err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     });
//   }

//   onFileChange(event: any): void {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.form.profile_image = file;
//     }
//   }
