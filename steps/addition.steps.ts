import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { Calculator } from '../src/calculator';

let calculator: Calculator;
let result: number;

Given('I have numbers {int} and {int}', function (a: number, b: number) {
  calculator = new Calculator(a, b);
});

When('I add them', function () {
  result = calculator.add();
});

Then('the result should be {int}', function (expected: number) {
  assert.strictEqual(result, expected);
});