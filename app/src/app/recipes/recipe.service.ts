import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simple test',
      'https://img.delicious.com.au/Pwnp-j1O/w1200/del/2022/08/ramenara-ramen-carbonara-172843-2.png'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simple test',
      'https://img.delicious.com.au/Pwnp-j1O/w1200/del/2022/08/ramenara-ramen-carbonara-172843-2.png'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
