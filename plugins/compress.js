const fp = require('fastify-plugin');
module.exports = fp(function (fastify, opts, next) {
  fastify.register(require('fastify-compress'), { inflateIfDeflated: true });
  next();
});
