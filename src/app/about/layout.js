import en from "@/translations/en.json";

export const metadata = {
  title: `${en.sections.about} | Yasser Bin Bishr`,
  description: en.about?.text?.split("\n\n")[0]?.replace(/\*\*/g, "") || "About Yasser Bin Bishr — Frontend Developer & UI/UX Designer",
  openGraph: {
    title: `${en.sections.about} | Yasser Bin Bishr`,
    description: en.about?.text?.split("\n\n")[0]?.replace(/\*\*/g, ""),
  },
};

export default function AboutLayout({ children }) {
  return children;
}
