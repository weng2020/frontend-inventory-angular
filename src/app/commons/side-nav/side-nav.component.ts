import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
