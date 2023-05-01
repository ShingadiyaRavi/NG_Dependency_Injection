import { Injectable } from '@angular/core';

@Injectable(
  /*  This is comment for the if not provider provide this service to root then component genrate error and we handle it using @optional decorator so here this is comment. */
  // {providedIn: 'root'}

  /* Here i provide this service to root so everyone can access this servies but we want to @self() & @SkipSelf() so i am used it. */
  // {providedIn:'root'}
  )
export class TestService {

  servicesData='This Is Services';

  constructor() { }

  printData():void{
    console.log("Called From The Services..");
  }
}
