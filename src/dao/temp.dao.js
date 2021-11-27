const dao = (fastify) => {
  const getAll = () => fastify.db.query('SELECT * FROM test');

  const save = (title) =>
    fastify.db.one(
      // db coming from database.js
      'INSERT INTO test(title) VALUES($1) RETURNING id',
      [title]
    );

  return { getAll, save };
};

module.exports = dao;
