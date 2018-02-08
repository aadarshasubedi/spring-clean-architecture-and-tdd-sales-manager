import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AbstractHttpUseCaseFormComponent} from '../../../../api';
import {AddNewItemUseCaseModule} from '../../../../domain/items';

@Component({
  selector: 'cloud-sales-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent extends AbstractHttpUseCaseFormComponent implements OnInit {

  itemForm: FormGroup = AddNewItemUseCaseModule.UseCaseForm.create();

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
