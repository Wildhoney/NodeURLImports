# NodeURLImports

> Transform browser URL `import`s into Node compatible `import`/`require` statements using local dependencies. 

![Travis](http://img.shields.io/travis/Wildhoney/NodeURLImports.svg?style=for-the-badge)
&nbsp;
![npm](http://img.shields.io/npm/v/node-url-imports.svg?style=for-the-badge)
&nbsp;
![License MIT](http://img.shields.io/badge/license-mit-lightgrey.svg?style=for-the-badge)
&nbsp;
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

**npm**: `npm install node-url-imports`

## Getting Started

As only `require` statements are catchable, all `import` statements first need to be transformed into their `require` equivalents &ndash; using something like [`Babel`](https://github.com/babel/babel).

```console
foo@bar:~$ node -r @babel/register index.js
```

Using the following `.babelrc` configuration:

```json
{
    "ignore": [],
    "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
```

With the `@babel/plugin-transform-modules-commonjs` dependency loaded Babel only transform the `import` statements. After that you can include the `node-url-imports` module that'll monkey-patch the `require` function and transform all URL imports into their local dependency equivalents.

```console
foo@bar:~$ node -r @babel/register -r node-url-imports index.js
```

Afterwards you can include other transpilers such as [`esm`](https://github.com/standard-things/esm).
