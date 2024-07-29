'use client';

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <h1 className='text-lg md:text-xl font-bold mr-20'>Gonzy quiere leer</h1>
      <NavigationMenu>
        <NavigationMenuList>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex-1' />
      <ModeToggle />
    </div>
  );
};

export default Navbar;