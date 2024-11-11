import Fastify from 'fastify';
import { parse } from 'valibot';
// import { monitoringEvents, monitoringEventsInsertSchema } from './services/database/schemas/index.js';
// import { db } from './services/database/index.js';
import fastifyStatic from '@fastify/static';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: join(__dirname, '../dist-client'),
})

fastify.get('/api/monitoring/collect', function (request, reply) {
  const body = request.body;

  try {
    // const newEvent = parse(monitoringEventsInsertSchema, body);
    // db.insert(monitoringEvents).values(newEvent);

    reply.code(200).send('OK');
  } catch (e) {
    reply.code(500).send({ error: 'Неправильный формат запроса' });
  }
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
