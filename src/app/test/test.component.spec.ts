import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { Cart } from './Cart';
import { Sandwich } from './Sandwich';

describe('TestComponent', () => {
  
  it( 'should add sandwich',()=>{
    const cart = new Cart();
    const burger = new Sandwich('Burger', 15);
    const butter = new Sandwich('Butter & butter',12);

    cart.addSandwich(burger);
    cart.addSandwich(butter);
     const sandwichList = cart.getSandwichList();
     expect(sandwichList).toEqual([burger,butter]);
  })
  xit('should compute sandwich list',()=>{
    throw new Error('work in progress')
  })
  
});
