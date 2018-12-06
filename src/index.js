const Module = require('module');
const require_ = Module.prototype.require;

export const isRemote = name => name.startsWith('http://') || name.startsWith('https://') || name.startsWith('://');

export const transformImportUrl = name => {
    const matches = name.match(/\/(?<name>[^/]+?)@(?<version>.+?)(?<path>\/.+)$/i);
    return matches ? `${matches.groups.name}${matches.groups.path}` : name;
};

Module.prototype.require = function(name, ...rest) {
    return isRemote(name)
        ? require_.apply(this, [transformImportUrl(name), ...rest])
        : require_.apply(this, [name, ...rest]);
};
