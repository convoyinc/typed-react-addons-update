import * as update from 'react-addons-update';

import test = require('blue-tape');

test('exposes array command types', (t) => {
  let command:update.ArrayCommand;
  command = {$push: [1, 2]};
  command = {$unshift: [1]};
  command = {$splice: [[1, 2],[3]]};
  command = {$set: 123};
  command = {$apply: () => {}};
  // command = {$merge: {}}; // Not valid!
  t.end();
});

test('exposes object command types', (t) => {
  let command:update.ObjectCommand;
  // command = {$push: [1, 2]}; // Not valid!
  // command = {$unshift: [1]}; // Not valid!
  // command = {$splice: [[1, 2],[3]]}; // Not valid!
  command = {$set: 123};
  command = {$apply: () => {}};
  command = {$merge: {}};
  t.end();
});

test('works with object specs', (t) => {
  const result = update({a: {}}, {a: {b: {$set: 123}}});
  t.deepEqual(result, {a: {b: 123}});
  t.end();
});
