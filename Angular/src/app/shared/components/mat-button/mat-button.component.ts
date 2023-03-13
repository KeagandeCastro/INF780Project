import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mat-button',
  templateUrl: './mat-button.component.html',
  styleUrls: ['./mat-button.component.css']
})
export class MatButtonComponent implements OnInit {
   @Input() value = '';

  constructor() {}

  ngOnInit(): void {}
}
