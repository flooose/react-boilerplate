import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShoppingList from './index.js'

describe("Player", function() {

  beforeEach(function() {
  });

  it("should be able to play a Song", function() {
    var element = React.createElement(
      ShoppingList, // component class
      {} // props go here
      // You can also add children here as the last argument
    );
    expect(function() {
      var component = ReactTestUtils.renderIntoDocument(element);
    }).not.toThrow();
  });
});
