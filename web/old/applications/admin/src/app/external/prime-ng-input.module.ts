import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {InputTextareaModule, SplitButtonModule} from "primeng/primeng";

export function primeNgComponents(): any[] {
  return [
    ButtonModule,
    PanelModule,
    SplitButtonModule,
    InputTextareaModule
  ];
}

@NgModule({
  imports: [
    ...primeNgComponents()
  ],
  exports: [...primeNgComponents()],
  declarations: []
})
export class PrimeNgInputModule {
}
