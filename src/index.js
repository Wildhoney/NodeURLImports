const Module = require('module');
const require_ = Module.prototype.require;

const isRemote = name => name.startsWith('http://') || name.startsWith('https://') || name.startsWith('://');

Module.prototype.require = function(name, ...rest) {

  if (isRemote(name)) {
    const matches = name.match(/\/(?<name>[^\/]+?)@(?<version>.+?)(?<path>\/.+)$/i);
    const newName = matches && `${matches.groups.name}${matches.groups.path}`
    return require_.apply(this, [newName || name, ...rest]);
  }

  return require_.apply(this, [name, ...rest]);

};

// const promisesque = require('https://cdn.jsdelivr.net/npm/promisesque@0.2.0/src/index.js');
// console.log(promisesque);
