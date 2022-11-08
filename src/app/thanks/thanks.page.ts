import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  constructor(private _location: Location) {

  }

  ngOnInit() {
  }

  back(){
    this._location.back();
  }

}
