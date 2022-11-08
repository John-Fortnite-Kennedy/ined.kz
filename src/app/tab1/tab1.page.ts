import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    spaceBetween: 20,
    //centerInsufficientSlides: false,
    //speed: 400
}

  constructor(private router: Router) {}

  navigate(){
    this.router.navigate(['/thanks'])
  }

}
