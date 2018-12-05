import test from 'ava';
import '.';

const isFunction = a => typeof a === 'function';

test('It should be able to import a module specified as a URL;', t => {
    const promisesque = require('https://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js');

    t.true(isFunction(promisesque));
    t.true(isFunction(promisesque));
    t.true(isFunction(promisesque));
});
