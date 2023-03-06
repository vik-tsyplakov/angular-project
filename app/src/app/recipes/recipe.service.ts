import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti carbonara recipe',
      'Discover how to make superb spaghetti carbonara. This cheesy pasta dish is an Italian favourite and with the right technique, you can make it perfect every time',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg',
      [
        new Ingredient('pancetta (grams)', 100),
        new Ingredient('pecorino cheese (grams)', 50),
        new Ingredient('parmesan (grams)', 50),
        new Ingredient('large eggs', 3),
        new Ingredient('spaghetti (grams)', 350),
        new Ingredient('plump garlic cloves, peeled and left whole', 2),
        new Ingredient('unsalted butter (grams)', 50),
        new Ingredient('sea salt and freshly ground black pepper (pinch)', 1),
      ]
    ),
    new Recipe(
      'Teriyaki pork meatballs',
      'Just four supermarket ingredients stand between you and this super quick, low-calorie supper. Meatballs in a teriyaki sauce with fresh and crunchy pak choi',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/teriyaki-noodles-e167565.jpg',
      [
        new Ingredient('dried medium egg noodles (grams)', 250),
        new Ingredient('pork meatballs', 12),
        new Ingredient('pak choi (grams)', 250),
        new Ingredient('tbsp teriyaki sauce', 6),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
