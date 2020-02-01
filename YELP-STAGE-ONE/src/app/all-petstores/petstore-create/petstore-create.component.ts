import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petstore-create',
  templateUrl: './petstore-create.component.html',
  styleUrls: ['./petstore-create.component.scss']
})
export class PetstoreCreateComponent implements OnInit {

  enteredValue = '';
  newStore = 'NO NAME';
  constructor() { }

  ngOnInit() {
  }

  onAddStore() {
    this.newStore = this.enteredValue;
  }

}
