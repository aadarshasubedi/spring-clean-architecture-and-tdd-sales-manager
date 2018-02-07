import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'cloud-sales-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    'code': new FormControl(),
    'name': new FormControl(),
    'description': new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
  }

}
