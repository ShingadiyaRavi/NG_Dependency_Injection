import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './Services/test.service';
import { FirstComponent } from './first/first.component';
import { TestDirective } from './Directives/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  /* This is used for the root instace . it will work with the root services and it called a root instance.and check with @self() decorator that time it uncomment.*/

  // constructor(private test:TestService){
    // console.log("Root Instance Called : ",test);
  // }

  // This is used for the @SkipSelf and it will used this instance for the services.
  // constructor(private test:TestService){
  //   this.test.servicesData = 'root';
  // }


}
