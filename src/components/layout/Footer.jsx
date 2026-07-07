"use client";

import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { dir, t } = useLanguage();
  return (
    <footer className="py-8 mt-12 flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-12" dir={dir}>
      <p className="text-slate-500 font-medium text-[10px] md:text-sm tracking-wide text-center">
        &copy; {new Date().getFullYear()} {t("footer.text")}
      </p>
    </footer>
  );
};

export default Footer;
