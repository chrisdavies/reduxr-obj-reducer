## reduxr-obj-reducer

A utility to create Redux reducers from simple objects.

Part of the [reduxr](https://github.com/chrisdavies/reduxr) family of packages.

[![Build Status](https://travis-ci.org/chrisdavies/reduxr-obj-reducer.svg?branch=master)](https://travis-ci.org/chrisdavies/reduxr-obj-reducer)

## Usage

With idiomatic Redux, a reducer would look something like this:

```js
export default function (state, action) {
  switch (action.type) {
    case 'user_setName':
      return {...state, name: action.name}
    case 'user_setAge':
      return {...state, age: action.age}
    default:
      return {}
  }
}
```

With `objReducer`, this would produce the same result:

```js
import objReducer from 'reduxr-obj-reducer';

export default objReducer({}, {
  user_setName: (state, {name}) => ({...state, name}),
  user_setAge: (state, {age}) => ({...state, age})
});

```

`objReducer` takes one or two arguments. If two arguments are passed, the first
is the default value for the reducer. It's generally a good idea to pass this
in otherwise, the reducer will produce a default value of `null`.

In this example, there's still some ugliness in that, really this reducer
is scoped to `user_` actions, so it would be nice to not have to prefix all the
methods with `user_`. That's where [`reduxr-scoped-reducer`](https://github.com/chrisdavies/reduxr-scoped-reducer) comes in.

## License MIT

Copyright (c) 2015 Chris Davies

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
