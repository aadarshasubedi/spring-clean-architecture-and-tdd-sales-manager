import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {ListItemsComponent} from './list-items/list-items.component';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    ItemsRoutingModule
  ],
  declarations: [AddNewItemComponent, ListItemsComponent],
  exports: [AddNewItemComponent, ListItemsComponent]
})
export class ItemsModule {
}
