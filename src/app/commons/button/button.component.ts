import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'weng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() value;

  constructor() { }

  ngOnInit() {
  }
}
