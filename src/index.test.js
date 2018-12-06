import test from 'ava';
import { isRemote, transformImportUrl } from '.';

test('It should be able to import a module specified as a URL;', t => {
    const isFunction = a => typeof a === 'function';
    const promisesque = require('https://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js');
    t.true(isFunction(promisesque.get));
    t.true(isFunction(promisesque.all));
    t.true(isFunction(promisesque.race));
});

test('It should be able to determine if the import name is remote;', t => {
    t.true(isRemote('://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js'));
    t.true(isRemote('http://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js'));
    t.true(isRemote('https://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js'));
    t.false(isRemote('promisesque'));
});

test('It should be able to parse URL import declarations;', t => {
    t.is(transformImportUrl('https://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js'), 'promisesque/src/index.js');
    t.is(transformImportUrl('https://unpkg.com/promisesque@0.2.0/src/index.js'), 'promisesque/src/index.js');
    t.is(transformImportUrl('https://unpkg.com/promisesque-abc@0.2.0/src/index.js'), 'promisesque-abc/src/index.js');
});
