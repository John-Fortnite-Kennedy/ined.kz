import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksPage } from '../thanks/thanks.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'thanks',
    component: ThanksPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
