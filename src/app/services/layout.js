import en from "@/translations/en.json";

const servicesTitle = `${en.sections.services} | Yasser Bin Bishr`;

export const metadata = {
  title: servicesTitle,
  description: en.sections.servicesSubtitle || "Digital solutions — frontend development, UI/UX design, and browser extensions",
  openGraph: {
    title: servicesTitle,
    description: en.sections.servicesSubtitle,
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
