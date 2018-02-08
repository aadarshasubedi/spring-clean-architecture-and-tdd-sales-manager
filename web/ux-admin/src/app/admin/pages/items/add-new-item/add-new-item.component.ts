import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AbstractHttpUseCaseFormComponent} from '../../../../api';

@Component({
  selector: 'cloud-sales-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent extends AbstractHttpUseCaseFormComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    'code': new FormControl('', Validators.pattern('CODE-\w+')),
    'name': new FormControl(),
    'description': new FormControl()
  });

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
