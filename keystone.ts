import { config } from '@keystone-6/core'

export default config({
  db: {
    provider: 'postgresql',
    url: 'postgres://dbuser:dbpass@localhost:5432/keystone',
    onConnect: async (context) => {
      /* ... */
    },
    // Optional advanced configuration
    enableLogging: true,
    idField: { kind: 'uuid' },
    shadowDatabaseUrl: 'postgres://dbuser:dbpass@localhost:5432/shadowdb',
  },
  /* ... */
})
