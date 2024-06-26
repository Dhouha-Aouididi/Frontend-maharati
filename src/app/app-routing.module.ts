import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ProviderlistComponent } from './providerlist/providerlist.component';
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path: 'servicelist', component: ServicelistComponent},
  { path: 'services/:id', component: ServiceDetailComponent },
  {path: 'providerlist', component: ProviderlistComponent},
  {path: 'providers/:id', component: ProviderDetailComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
