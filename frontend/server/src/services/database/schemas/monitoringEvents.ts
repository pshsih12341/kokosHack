import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-valibot';

export const monitoringEvents = pgTable('monitoring_events', {
  id: serial('id').primaryKey(),
  source: varchar('source', { length: 256 }),
  event: varchar('event', { length: 256 }),
});

export const monitoringEventsInsertSchema =
  createInsertSchema(monitoringEvents);
