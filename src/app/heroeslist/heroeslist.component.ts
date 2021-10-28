import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroeinterface';
@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
})
export class HeroeslistComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero[] = [];
  click: boolean = true;

  constructor(private heroservice: HeroService) {}
  getHeroes() {
    this.heroes = this.heroservice.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onclick(data: any) {
    this.selectedHero = data;
    // console.warn(this.selectedHero);
    // this.click = false;
  }
}
