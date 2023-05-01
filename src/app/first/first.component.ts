import { Component, Host } from '@angular/core';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  /* This is used for the @Host() Decorator. we need to add services in directives like provide[servicename], because @Host() will not work with the any file but it is only work with the Current View. */

  constructor(@Host() private test:TestService){
    console.log("This is First Component File : ",test.servicesData);
  }

}
