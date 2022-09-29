import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe name', 'Recipe description', 
  'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
