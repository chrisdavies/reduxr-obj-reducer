'use strict';

import objReducer from '../obj-reducer';

describe('obj-reducer', function () {  
  it('Only invokes methods that match action type', function () {
    const reducer = objReducer({
      one: () => 'uno',
      two: () => 'dos',
      foo_bar: (_, {name}) => `hi ${name}`
    });

    expect(reducer(undefined, { type: 'baz' })).toBeNull();
    expect(reducer(undefined, { type: 'one' })).toEqual('uno');
    expect(reducer(undefined, { type: 'two' })).toEqual('dos');
    expect(reducer(undefined, { type: 'foo_bar', name: 'you' }))
      .toEqual('hi you');
  });

  it('Passes action and state through', function () {
    const reducer = objReducer('doh', {
      sayHi: (state, action) => state + action.text
    });

    expect(reducer('hi ', { type: 'sayHi', text: 'Joe' })).toEqual('hi Joe');
    expect(reducer(undefined, { type: 'foo' })).toBe('doh');
  });
});
