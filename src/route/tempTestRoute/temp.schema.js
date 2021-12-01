const postRequestbody = {
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      minLength: 10,
    },
  },
};

const postResponse = {
  201: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
};

module.exports = {
  postRequestbody,
  postResponse,
};
