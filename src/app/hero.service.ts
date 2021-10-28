import { Injectable } from '@angular/core';
import { HEROES } from './mockheroes';
import { Hero } from './heroeinterface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  getHeroes(): Hero[] {
    return HEROES;
  }
}
