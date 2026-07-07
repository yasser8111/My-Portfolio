"use client";

import { TextBlock } from "@/components/ui/TextBlockEffect";
import Button from "@/components/ui/Button";
import { GithubIcon, WhatsappIcon, InstagramIcon, XIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";

const SOCIALS = [
  { key: "instagram", Icon: InstagramIcon, label: "Instagram Profile", hoverClass: "hover-instagram" },
  { key: "x", Icon: XIcon, label: "X (Twitter) Profile", hoverClass: "hover-x" },
  { key: "linkedin", Icon: LinkedInIcon, label: "LinkedIn Profile", hoverClass: "hover-linkedin" },
  { key: "github", Icon: GithubIcon, label: "GitHub Profile", hoverClass: "hover-github" },
  { key: "whatsapp", Icon: WhatsappIcon, label: "WhatsApp", hoverClass: "hover-whatsapp" },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const email = t("personal.email");
  const socials = t("personal.socials") || {};

  const heading = t("contact.heading") || "Every great project starts\nwith a conversation.";

  return (
    <section id="contact" className="pt-24 pb-12 md:py-24 px-6 md:px-12 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-black tracking-tighter mb-8 leading-[1.4] text-slate-900 flex flex-col items-start">
            <TextBlock blockColor="#2563eb" className="block">
              {heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i < heading.split("\n").length - 1 && <br />}</span>
              ))}
            </TextBlock>
          </h2>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-base md:text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors group relative"
          >
            <span className="relative transition-transform duration-300 ease-out group-hover:-translate-x-1">
              {email}
            </span>
            <span className="material-symbols-sharp text-[20px] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
              arrow_outward
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-8">
          <div className="flex gap-0 overflow-hidden">
            {SOCIALS.map(({ key, Icon, label, hoverClass }) => (
              <Button
                key={key}
                href={socials[key]}
                external
                variant="social"
                shape="squareIcon"
                className={hoverClass}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
