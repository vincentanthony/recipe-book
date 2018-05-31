import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeClicked = true;
  shoppingClicked = false;

  onNaviagte(feature: string) {
    if (feature === 'recipe') {
      this.recipeClicked = true;
      this.shoppingClicked = false;
    } else if (feature === 'shopping-list') {
      this.shoppingClicked = true;
      this.recipeClicked = false;
    }
  }

}
