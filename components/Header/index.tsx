"use client";

import Link from "next/link";
import MainNavigation, { NavigationMenuItem } from "../MainNavigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { mainmenu } from "@/lib/mocks";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import LogoLink from "../LogoLink";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 py-4 shadow-sm">
        <div className="flex flex-wrap justify-between items-center container">
          <div className="flex lg:flex-1">
            <LogoLink />
          </div>

          <MainNavigation menuItems={mainmenu} />

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </nav>
      <div className="lg:hidden">
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogContent className="fixed inset-y-0  right-0 z-10 w-full overflow-y-auto bg-primary sm:max-w-sm sm:ring-1 sm:ring-primary">
            <div className="flex items-center justify-between p-4">
              <LogoLink size={60} />

              <Button
                type="button"
                variant="ghost"
                className="p-4 text-white hover:bg-transparent hover:text-gray-300 focus:outline-none justify-end"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y-2 divide-gray-500/10">
                <div className="py-6 space-y-2">
                  <ul>
                    {mainmenu.map((item) => (
                      <li key={item.title}>
                        {item.subitems ? (
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2 text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
                                  {item.title}
                                  <ChevronDownIcon
                                    className={cn(
                                      "w-4 h-4 flex-none transition-transform",
                                      {
                                        "transform rotate-180": open,
                                      }
                                    )}
                                    aria-hidden="true"
                                  />
                                </Disclosure.Button>

                                <Disclosure.Panel>
                                  <ul>
                                    {item.subitems.map(
                                      (subitem: NavigationMenuItem) => (
                                        <li key={subitem.title}>
                                          <Link
                                            className="block px-4 py-2 text-white text-sm hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
                                            href={subitem.href}
                                            passHref
                                          >
                                            {subitem.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ) : (
                          <Link
                            className="block px-4 py-2 text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
                            href={item.href}
                            passHref
                          >
                            {item.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export default Header;
