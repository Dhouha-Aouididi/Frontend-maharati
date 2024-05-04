import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/shared/header/header.component';
import { StickyHeaderDirective } from './directive/sticky-header.directive';
import { ToastrModule } from 'ngx-toastr';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ProviderlistComponent } from './providerlist/providerlist.component';
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';
import { StarRatingModule } from 'angular-star-rating';
import { CommentsComponent } from './comments/comments.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BookComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    StickyHeaderDirective,
    ServicelistComponent,
    ServiceDetailComponent,
    ProviderlistComponent,
    ProviderDetailComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StarRatingModule.forRoot(),
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
