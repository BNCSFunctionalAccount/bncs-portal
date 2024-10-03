import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Cores } from '~/components/cores';

export default withPageAuthRequired(
  async function CoresPage() {
    return (
      <section className="flex flex-col h-full gap-2">
        <h1 className="text-4xl">Cores</h1>
        <Cores />
      </section>
    );
  },
  { returnTo: '/cores' }
);
