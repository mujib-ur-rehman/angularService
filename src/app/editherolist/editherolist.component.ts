import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../heroeinterface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-editherolist',
  templateUrl: './editherolist.component.html',
  styleUrls: ['./editherolist.component.css']
})
export class EditherolistComponent implements OnInit {
  constructor(private heroservice: HeroService) {}

  @Input() hero: any;

  updateHero() {
    this.hero = this.heroservice.updateHero();
  }

  onKey(data: any) {
    console.warn(this.hero);
  }

  ngOnInit(): void {}
}
