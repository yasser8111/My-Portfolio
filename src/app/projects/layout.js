import en from "@/translations/en.json";

const projectsTitle = `${en.sections.selectedWorks} | Yasser Bin Bishr`;

export const metadata = {
  title: projectsTitle,
  description: en.sections.selectedWorksSubtitle || "A look at my latest work in frontend development and UI/UX design.",
  openGraph: {
    title: projectsTitle,
    description: en.sections.selectedWorksSubtitle,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
