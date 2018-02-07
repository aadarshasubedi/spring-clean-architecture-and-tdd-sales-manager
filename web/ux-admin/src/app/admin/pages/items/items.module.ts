import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {ListItemsComponent} from './list-items/list-items.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [AddNewItemComponent, ListItemsComponent],
  exports: [AddNewItemComponent, ListItemsComponent]
})
export class ItemsModule {
}
