import { config } from '@keystone-6/core';
// import { lists } from 'schema';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';

import { lists } from './keystone/schema';

// import { TypeInfo } from '.keystone/types';

export default config({
  db: {
    provider: 'postgresql',
    url: 'postgres://postgres:password@localhost:5432/postgres',
    onConnect: async context => {
      console.log('Connected - yay!');
    },

    enableLogging: true,
  },
  ui: {
    basePath: '/admin',
  },
  lists: lists,
});
