/**
 * Reusable project card with cover image + gradient overlay + name/description.
 * Used in both the home page "Selected Works" and the /projects gallery.
 */
const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer bg-white border border-slate-100 overflow-hidden transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5"
  >
    <div className="aspect-[16/12] md:aspect-[4/3] relative overflow-hidden bg-slate-100">
      <img
        src={project.cover || project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/80 font-medium leading-relaxed line-clamp-2 max-w-prose">
          {project.desc}
        </p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
