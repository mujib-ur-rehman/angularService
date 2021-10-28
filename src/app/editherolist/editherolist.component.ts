import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../heroeinterface';

@Component({
  selector: 'app-editherolist',
  templateUrl: './editherolist.component.html',
  styleUrls: ['./editherolist.component.css']
})
export class EditherolistComponent implements OnInit {
  constructor() {}
  @Input() hero: any;
  onKey(data: any) {
    console.warn(this.hero);
  }

  ngOnInit(): void {}
}
