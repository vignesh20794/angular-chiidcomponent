import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector:'app-list',
  templateUrl:'./list.component.html'
})

export class listComponent{
  //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  heroes = [
    new Hero(1,'Windstorm'),
    new Hero(2,'Bombasto'),
    new Hero(3,'Magneta'),
    new Hero(4,'Tornado'),
    new Hero(5,'Flash')
  ]
}
