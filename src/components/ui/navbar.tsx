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
      <h1 className='text-2xl font-bold mr-20'>González quiere leer 🤓</h1>
      <NavigationMenu>
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Datos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex-1' />
      <ModeToggle />
    </div>
  );
};

export default Navbar;