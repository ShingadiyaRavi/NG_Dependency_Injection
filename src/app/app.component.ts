import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { TestService } from './Services/test.service';//This is import services which create by me...


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  /* This is register here because of @self() only work with this providers[] array so it will not generate error if we register the service here. otherwise it will generate the error in @self() case. */
  providers: [TestService]
})
export class AppComponent {
  title = 'Dependency_Injection';

  /* This is used for the @optional() decorator,if provider not provide the services in provider[] array(componentfile or serviesfile or module file then it will generate error in console so we can bypass this error using @optional() so it is used...) */
  // constructor(@Optional() private test:TestService){
  //   console.log("This Is @Optional() Decorator Called :",test);
  // }

  /* This will generate error because it work with the specific component so we need to register service in provider[] array in this file so we handle this error. */
  // constructor(@Self() private test:TestService){
  //   console.log("This is @Self() Decorator Called : ",test)
  //   /* This is service method if we want to used it. */
  //   // test.printData();
  // }

  /* This is used for the @SkipSelf(). The skipself work reverse of @Skip(). The @SkipSelf() always find the parent instance and ignore the component same file instance.
    Here you can see  we set data into serviceData using @self() but @SkipSelf() is alwasys used parent Instance. */
  // constructor(@Self() private test:TestService,@SkipSelf() private parentTest:TestService){
  //   this.test.servicesData='Self';
  //   console.log("This is @Self() Decorator : ",test.servicesData);
  //   console.log("This is @SkipSelf() Decorator : ",this.parentTest.servicesData);
  // }




}
