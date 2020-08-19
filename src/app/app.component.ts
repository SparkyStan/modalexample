import { Component, VERSION } from '@angular/core';
//ngx-bootstrap
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CreateComponent } from './create/create.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  modalRef: BsModalRef;
  name: string = 'John Doe'

  constructor(private modalService: BsModalService) { }

  openModal() {
    const initialState = {
      name: this.name
    };
    this.modalRef = this.modalService.show(CreateComponent, {initialState:{initialState}});
  }
}