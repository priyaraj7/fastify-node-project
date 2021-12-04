const tempService = require('../../service/temp.service');
const {
  postRequestbody,
  postResponse,
  getResponseBody,
} = require('./temp.schema');

const route = async (fastify) => {
  // get route api/v1/test  ---- regester in app.js

  const { getAll, save } = tempService(fastify);

  fastify.get(
    '/',
    {
      schema: {
        response: getResponseBody,
      },
    },
    async (request, reply) => {
      const allTest = await getAll();
      reply.code(200).send({ temps: allTest });
    }
  );
  // post route api/v1/test  ---- regester in app.js
  fastify.post(
    '/',
    { schema: { body: postRequestbody, response: postResponse } },
    async (request, reply) => {
      fastify.log.info(`request with body ${request}`);
      const { title } = request.body;

      const id = await save(title);
      reply.code(201).send(id);
    }
  );
};

module.exports = route;
