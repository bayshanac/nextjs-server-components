import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import * as PopoverRadix from "@radix-ui/react-popover";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export type NavigationMenuItem = {
  title: string;
  href: string;
  subitems?: NavigationMenuItem[];
};

interface MainNavigationProps {
  menuItems: NavigationMenuItem[];
}

function MainNavigation({ menuItems }: MainNavigationProps) {
  return (
    <>
      <div aria-label="global" className="hidden lg:flex lg:gap-x-10 ms-8">
        {menuItems.map((item) => (
          <div
            className="color-gray-500 py-4 px-2 border-b-3 border-transparent hover:border-b-primary hover:border-b-3"
            key={item.title}
          >
            {item.subitems ? (
              <Popover>
                <PopoverTrigger className="group flex items-center">
                  <span className="text-gray-500 uppercase mr-1">
                    {item.title}
                  </span>
                  <ChevronDownIcon
                    className={"w-3 h-3 flex-none transition-transform"}
                    aria-hidden="true"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <ul>
                    {item.subitems.map((subitem) => (
                      <li key={subitem.title}>
                        <Link href={subitem.href}>{subitem.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <PopoverRadix.Arrow className="PopoverArrow" />
                </PopoverContent>
              </Popover>
            ) : (
              <Link
                className="text-gray-500 uppercase  "
                key={item.title}
                href={item.href}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link className="text-gray-500 hover:text-primary uppercase" href="/login" passHref>
          Login <span> &rarr;</span>
        </Link>
      </div>
    </>
  );
}

export default MainNavigation;
