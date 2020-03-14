import { Sandwich } from "./Sandwich";
export class Cart {
  private _sandwichList: Sandwich[] = [];
  addSandwich(sandwich: Sandwich) {
    this._sandwichList = [...this._sandwichList, sandwich];
  }
  ;
  getSandwichList() {
    return this._sandwichList;
  }
  ;
}
