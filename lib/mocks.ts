import { NavigationMenuItem } from "@/components/Navigation";
import { Slide } from "@/components/Slider";

export const slides: Slide[] = [
  {
    image: "/slider/slide-01.jpeg",
    title: "ONLINE<br />EDUKACIJE",
    button1Label: "Pogledaj",
    button1Link: "#"
  },
  {
    image: "/slider/slide-02.jpeg",
    title: "Online<br />predavanja",
    subtitle: "Pokreni znanje za samopouzdanje",
    button1Label: "Pogledaj",
    button1Link: "#"
  },
  {
    image: "/slider/slide-03.jpeg",
    button1Label: "Pogledaj",
    button1Link: "#"
  }
]

export const mainmenu: NavigationMenuItem[] = [
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
    href: "/warehouse",
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