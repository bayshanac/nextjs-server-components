"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavigationMenuItem = {
  title: string;
  href: string;
  subitems?: NavigationMenuItem[];
};

const mainmenu: NavigationMenuItem[] = [
  {
    title: "Mentori",
    href: "/mentori",
    subitems: [
      {
        title: "Pokreni znanje",
        href: "/pokreni-znanje",
      },
      {
        title: "Mentorski razgovori",
        href: "/mentorski-razgovori",
      },
      {
        title: "Maser class",
        href: "/master-class",
      },
      {
        title: "Video edukacije",
        href: "/video-edukacije",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Edukacije",
    href: "/edukacije",
    subitems: [
      {
        title: "Pokreni znanje",
        href: "/pokreni-znanje",
      },
      {
        title: "Mentorski razgovori",
        href: "/mentorski-razgovori",
      },
      {
        title: "Maser class",
        href: "/master-class",
      },
      {
        title: "Video edukacije",
        href: "/video-edukacije",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/kontakt",
    subitems: [
      {
        title: "Pokreni znanje",
        href: "/pokreni-znanje",
      },
      {
        title: "Mentorski razgovori",
        href: "/mentorski-razgovori",
      },
      {
        title: "Maser class",
        href: "/master-class",
      },
      {
        title: "Video edukacije",
        href: "/video-edukacije",
      },
    ],
  },
];


export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainmenu.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.subitems ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[430px] gap-3 p-4">
                    {item.subitems.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        href={props.href ?? "#"}
        {...props}
      >
        <NavigationMenuLink asChild>
          <div className="text-sm font-medium leading-none">{title}</div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
