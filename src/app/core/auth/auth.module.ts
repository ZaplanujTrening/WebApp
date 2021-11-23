import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        }
  ]
})
export class AuthModule { }
