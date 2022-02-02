import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsButtonsComponent } from './components/options-buttons/options-buttons.component';


@NgModule({
  declarations: [
    OptionsButtonsComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    OptionsButtonsComponent,
  ]
})
export class SharedModule { }
