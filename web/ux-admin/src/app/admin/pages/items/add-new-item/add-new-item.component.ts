import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AbstractHttpUseCaseFormComponent} from '../../../../api';
import {AddNewItemUseCaseModule} from '../../../../domain/items';
import {Router} from '@angular/router';
import {AdminViewRoutes} from '../../../../domain/routes/routes';

@Component({
  selector: 'cloud-sales-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent extends AbstractHttpUseCaseFormComponent implements OnInit {

  itemForm: FormGroup = AddNewItemUseCaseModule.UseCaseForm.create();

  constructor(private router: Router,
              private useCase: AddNewItemUseCaseModule.HttpUseCase) {
    super();
  }

  ngOnInit() {
  }

  addNewItem() {
    if (this.itemForm.valid) {
      this.turnOnLoading();
      this.useCase.execute(this.itemForm.value)
        .subscribe(
          value => {
            this.router.navigate([AdminViewRoutes.LIST_ITEMS_URI])
              .then(v => console.log(`Successfully navigated to ${AdminViewRoutes.LIST_ITEMS_URI}.`));
          },
          err => {
            this.turnOnError();
            this.httpResponseError = err;
          });
    }
  }

}
