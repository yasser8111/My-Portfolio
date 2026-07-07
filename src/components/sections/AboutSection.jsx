"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Button from "@/components/ui/Button";
import { splitBoldMarkdown } from "@/lib/utils";

const AboutSection = () => {
  const { t } = useLanguage();
  const sections = t("sections") || {};
  const about = t("about") || {};
  const expertise = t("expertise") || [];
  const buttons = t("buttons") || {};

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div id="about" className="md:col-span-5 py-10 ps-4 md:ps-12 pe-4 flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
            <TextBlock blockColor="#2563eb">{sections.about}</TextBlock>
          </h3>

          {about.greeting && (
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              <TextBlock blockColor="#2563eb" className="block">
                {about.greeting}
              </TextBlock>
            </h4>
          )}

          {about.text?.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed text-slate-500 mb-5 last:mb-8 text-balance"
            >
              <TextBlock blockColor="#cbd5e1" className="block">
                {splitBoldMarkdown(paragraph).map((part, i) =>
                  part.isBold ? (
                    <strong key={i} className="font-bold text-slate-700">
                      {part.text}
                    </strong>
                  ) : (
                    part.text
                  )
                )}
              </TextBlock>
            </p>
          ))}

          <div className="mt-auto flex justify-end pt-10">
            <Link href="/about">
              <Button
                variant="outline"
                icon={({ className }) => <MaterialIcon icon="arrow_back" size={16} className={`rtl:rotate-180 ${className}`} />}
                iconPosition="start"
                className="uppercase"
              >
                {buttons.aboutMe}
              </Button>
            </Link>
          </div>
        </div>

        <div id="skills" className="hidden md:block md:col-span-7 py-16 ps-12 pe-6 md:pe-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
            <TextBlock blockColor="#2563eb">{sections.expertise}</TextBlock>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {expertise.slice(0, 4).map((item, i) => (
              <div key={i}>
                <h4 className="font-bold text-slate-900 mb-4 pb-2 uppercase tracking-wide text-sm">
                  <TextBlock blockColor="#2563eb">{item.category}</TextBlock>
                </h4>
                <ul className="space-y-3 text-base text-slate-500 font-medium">
                  {item.skills?.slice(0, 3).map((skill, j) => (
                    <li key={j}>
                      <TextBlock blockColor="#cbd5e1">{skill}</TextBlock>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
