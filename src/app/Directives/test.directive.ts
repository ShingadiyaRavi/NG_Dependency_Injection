import { Directive, Host } from '@angular/core';
import { TestService } from '../Services/test.service';

@Directive({
  selector: '[appTest]',

  /* This is used for the @Host , If we not write here then @Host will be generate the error in the console. */
  providers:[TestService]
})
export class TestDirective {

  constructor(private test:TestService){
    test.servicesData='Directive';
  }

}
