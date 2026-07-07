"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { createSlug } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Button from "@/components/ui/Button";
import { SERVICE_PALETTES } from "@/lib/constants";

const ServicesSection = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const sections = t("sections") || {};
  const services = t("services") || [];
  const buttons = t("buttons") || {};

  return (
    <section id="services" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => {
            const palette = SERVICE_PALETTES[i % 3];
            return (
              <div
                key={i}
                onClick={() => router.push(`/services#${createSlug(service.title)}`)}
                className="p-6 md:p-12 cursor-pointer group"
                style={{ backgroundColor: palette.bg }}
              >
                <div className="mb-8">
                  <span
                    className="text-5xl font-mono font-bold tracking-tighter opacity-30 transition-all duration-500"
                    style={{ color: palette.base }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4" style={{ color: palette.title }}>
                  <TextBlock blockColor={palette.base}>{service.title}</TextBlock>
                </h4>
                <p className="text-base font-medium leading-relaxed" style={{ color: palette.desc }}>
                  <TextBlock blockColor={palette.base} className="block">
                    {service.desc}
                  </TextBlock>
                </p>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-3 py-6 md:py-16 pe-4 md:pe-12 ps-4 flex flex-row md:flex-col justify-between items-center md:items-end gap-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 md:mb-8">
            <TextBlock blockColor="#2563eb">{sections.services}</TextBlock>
          </h3>
          <div className="hidden md:flex justify-end">
            <Link href="/services">
              <Button
                variant="primary"
                icon={({ className }) => <MaterialIcon icon="arrow_back" size={16} className={`rtl:rotate-180 ${className}`} />}
                iconPosition="start"
                className="uppercase"
              >
                {buttons.moreServices}
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden py-12 px-6 flex justify-end">
          <Link href="/services">
            <Button
              variant="primary"
              icon={({ className }) => <MaterialIcon icon="arrow_back" size={16} className={`rtl:rotate-180 ${className}`} />}
              iconPosition="start"
              className="uppercase"
            >
              {buttons.moreServices}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
