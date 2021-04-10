import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent {

  searchForm;

  constructor(
    private formBuilder: FormBuilder,
    private notification: NotificationService
  ) {
    this.searchForm = this.formBuilder.group({
      filter: [null, []]
    });
  }
  buscarHeroe(){
    this.notification.notifySaveData.emit({
      filter: this.searchForm.value.filter
    });
  }

}
