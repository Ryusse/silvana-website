export const SITE_TITLE = "Silvana website";
export const SITE_DESCRIPTION = "Silvana's website";

type LinkType = {
  label: string;
  href: string;
  icon?: string;
};

export const navigationLinks: LinkType[] = [
  {
    label: "Contenidos",
    href: "/contenidos",
  },
  {
    label: "Recursos",
    href: "/recursos",
  },
  {
    label: "Colaboraciones",
    href: "/colaboraciones",
  },
  {
    label: "Feedback",
    href: "/feedback",
  },
  {
    label: "Cursos premium",
    href: "/cursos-premium",
  },
];
