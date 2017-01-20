import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { Counter } from './../src/ts/Counter';


it('should start with 0', () => {
  // Render a checkbox with label in the document
  const counter = TestUtils.renderIntoDocument(<Counter />) as any;

  const counterTextNode = TestUtils.findRenderedDOMComponentWithClass(counter, "counter-text-container");

  expect(counterTextNode.textContent).toEqual("0");  
});

it('should increment to 1', () => {
  // Render a checkbox with label in the document
  const counter = TestUtils.renderIntoDocument(<Counter />) as any;

  const counterTextNode = TestUtils.findRenderedDOMComponentWithClass(counter, "counter-text-container");
  const incrementButton = TestUtils.findRenderedDOMComponentWithClass(counter, "increment-button");

  TestUtils.Simulate.click(incrementButton);

  expect(counterTextNode.textContent).toEqual("1");
});

it('should increment to 3', () => {
  // Render a checkbox with label in the document
  const counter = TestUtils.renderIntoDocument(<Counter />) as any;

  const counterTextNode = TestUtils.findRenderedDOMComponentWithClass(counter, "counter-text-container");
  const incrementButton = TestUtils.findRenderedDOMComponentWithClass(counter, "increment-button");

  TestUtils.Simulate.click(incrementButton);
  TestUtils.Simulate.click(incrementButton);
  TestUtils.Simulate.click(incrementButton);

  expect(counterTextNode.textContent).toEqual("5");
});


it('should decrement to -1', () => {
  // Render a checkbox with label in the document
  const counter = TestUtils.renderIntoDocument(<Counter />) as any;

  const counterTextNode = TestUtils.findRenderedDOMComponentWithClass(counter, "counter-text-container");
  const decrementButton = TestUtils.findRenderedDOMComponentWithClass(counter, "decrement-button");

  TestUtils.Simulate.click(decrementButton);

  expect(counterTextNode.textContent).toEqual("-1");
});