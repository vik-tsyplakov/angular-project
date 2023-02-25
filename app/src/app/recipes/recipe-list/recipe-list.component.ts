import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simple test',
      'https://img.delicious.com.au/Pwnp-j1O/w1200/del/2022/08/ramenara-ramen-carbonara-172843-2.png'
    ),
    new Recipe(
      'A test Recipe',
      'This is simple test',
      'https://img.delicious.com.au/Pwnp-j1O/w1200/del/2022/08/ramenara-ramen-carbonara-172843-2.png'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
