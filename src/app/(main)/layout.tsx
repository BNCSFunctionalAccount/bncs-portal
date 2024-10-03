import Image from 'next/image';

import { Sidebar } from '~/components/sidebar';
import { SIDEBAR_NAVITEMS } from '~/components/sidebar/constants';

import logo from '../../assets/logo.png';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen justify-between w-full">
      <div>
        <Sidebar navItems={SIDEBAR_NAVITEMS} />
      </div>
      <div className="absolute right-6 top-6">
        <Image src={logo} alt="Eviden Logo" width={175} height={100} />
      </div>
      <div className="flex flex-col h-full p-5 w-[calc(100%-256px)]">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
