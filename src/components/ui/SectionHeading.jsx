import MaterialIcon from "@/components/ui/MaterialIcon";

/**
 * Reusable section heading: icon + uppercase label.
 * Used across about, services, and other detail pages.
 */
const SectionHeading = ({ icon, label, className = "" }) => (
  <div className={`flex items-center gap-3 text-slate-400 ${className}`}>
    <MaterialIcon icon={icon} size={20} />
    <span className="text-xs font-bold uppercase tracking-[0.3em]">{label}</span>
  </div>
);

export default SectionHeading;
