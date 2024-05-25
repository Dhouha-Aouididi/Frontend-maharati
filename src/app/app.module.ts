import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/shared/header/header.component';
import { StickyHeaderDirective } from './directive/sticky-header.directive';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ProviderlistComponent } from './providerlist/providerlist.component';
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { BookingModalComponent } from './booking-modal/booking-modal.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingModalUpdateComponent } from './booking-modal-update/booking-modal-update.component';
import { ProfileComponent } from './profile/profile.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    StickyHeaderDirective,
    ServicelistComponent,
    ServiceDetailComponent,
    ProviderlistComponent,
    ProviderDetailComponent,
    CommentsComponent,
    BookingModalComponent,
    BookingsComponent,
    BookingModalUpdateComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
