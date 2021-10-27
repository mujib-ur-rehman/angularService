import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editherolist',
  templateUrl: './editherolist.component.html',
  styleUrls: ['./editherolist.component.css']
})
export class EditherolistComponent implements OnInit {
  constructor() {}
  @Input() hero: any;
  @Output() hero2: EventEmitter<any> = new EventEmitter();
  onKey(data: any) {
    this.hero2 = data.name;
    console.warn(this.hero2);
  }

  ngOnInit(): void {
    this.hero2.emit(this.hero2);
  }
}
