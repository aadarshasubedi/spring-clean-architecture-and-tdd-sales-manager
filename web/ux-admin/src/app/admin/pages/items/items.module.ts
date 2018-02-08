import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {ListItemsComponent} from './list-items/list-items.component';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxErrorsModule} from '@ultimate/ngxerrors';
import {CoreModule} from '../../../core/core.module';
import {AddNewItemUseCaseModule} from '../../../domain/items/usecase/add-new-item';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CoreModule,
    NgxErrorsModule,
    ReactiveFormsModule,
    ItemsRoutingModule
  ],
  declarations: [AddNewItemComponent, ListItemsComponent],
  exports: [AddNewItemComponent, ListItemsComponent],
  providers: [AddNewItemUseCaseModule.providers()]
})
export class ItemsModule {
}
