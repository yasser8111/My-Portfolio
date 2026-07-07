import Title from "./Title";

const PageBanner = ({
  title,
  subtitle,
  titleColor = "#2563eb",
  subtitleColor = "#94a3b8",
  backgroundImage,
}) => {
  return (
    <section 
      className="relative py-24 px-6 md:px-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className="absolute inset-0 z-10" />

      <div className="relative z-20 container mx-auto">
        <Title
          variant="pageHero"
          title={title}
          subtitle={subtitle}
          titleColor={titleColor}
          subtitleColor={subtitleColor}
        />
      </div>
    </section>
  );
};

export default PageBanner;
