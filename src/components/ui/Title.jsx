import { TextBlock } from "./TextBlockEffect";

const Title = ({ 
  variant = "subSection", 
  title, 
  subtitle, 
  children, 
  blockColor = "#2563eb",
  titleColor = "#2563eb",
  subtitleColor = "#2563eb"
}) => {
  
  if (variant === "pageHero") {
    return (
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter leading-tight text-slate-900 mb-8">
          <TextBlock blockColor={titleColor} className="block">
            {title}
          </TextBlock>
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            <TextBlock blockColor={subtitleColor} className="block">
              {subtitle}
            </TextBlock>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="md:p-12 p-4 pt-8">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
        <TextBlock blockColor={blockColor}>
          {children || title}
        </TextBlock>
      </h3>
    </div>
  );
};

export default Title;
