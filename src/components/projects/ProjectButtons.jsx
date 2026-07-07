import React from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Button from "@/components/ui/Button";

const ProjectButtons = ({ project, buttons }) => (
  <div className="flex flex-wrap gap-3 mt-6">
    {project.demoUrl && project.demoUrl !== "#" && (
      <Button
        href={project.demoUrl}
        external
        variant="primary"
        className="hover-dark"
        icon={({ size, className }) => <MaterialIcon icon="open_in_new" size={size} className={className} />}
        iconPosition="start"
      >
        {buttons.liveDemo}
      </Button>
    )}
    {project.repoUrl && project.repoUrl !== "#" && (
      <Button
        href={project.repoUrl}
        external
        variant="outline"
        className="hover-dark"
        icon={({ size, className }) => <MaterialIcon icon="code" size={size} className={className} />}
        iconPosition="start"
      >
        {buttons.sourceCode}
      </Button>
    )}
  </div>
);

export default ProjectButtons;
