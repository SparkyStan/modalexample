import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

//ngx-bootstrap
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  name: string;


  constructor(public bsModalRef: BsModalRef) { }

  onSubmit(form: NgForm) {
      this.bsModalRef.hide();
  }

}
