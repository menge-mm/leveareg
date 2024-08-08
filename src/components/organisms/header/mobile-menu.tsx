import { Button } from '@/components/atoms/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/atoms/sheet';
import { LogOutIcon, PanelLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { navs } from '../common/nav';
import type { Nav } from '../common/types';
import { useAuth } from '@/auth/AuthProvider';

const MobileMenu = () => {
  const { userDetails: userInfo, logout } = useAuth();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs flex flex-col justify-between">
        <nav className="grid gap-8 font-medium text-2xl">
          <Link href={'/'} className="rounded overflow-hidden w-[120px] border">
            <Image src={'/images/logoHeader.jpg'} width={120} height={28} alt="LEVEA Logo" />
            <span className="sr-only">LEVEA</span>
          </Link>
          {/* <span className="text-2xl text-primary border-b pb-2">Hello {userInfo?.givenName}</span> */}

          {navs.map((nav: Nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className="group no-underline flex items-center gap-4  hover:text-foreground"
            >
              {nav.icon}
              <span className="group-hover:translate-x-1 group-hover:text-foreground transition duration-200">
                {nav.tooltip}
              </span>
            </Link>
          ))}
        </nav>
        <Button
          onClick={logout}
          variant={'outline'}
          className="group border-none outline-none gap-4 text-2xl justify-start hover:bg-transparent hover:text-red-600 transition duration-200"
          size="sm"
        >
          <LogOutIcon className="mr-2 h-8 w-8 text-muted-foreground group-hover:text-red-600" />
          <span>Logout</span>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
