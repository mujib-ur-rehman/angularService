import { Injectable } from '@angular/core';
import { HEROES } from './mockheroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  getHeroes(): any {
    return HEROES;
  }
}
