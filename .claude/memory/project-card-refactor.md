---
name: project-card-refactor
description: Extracted shared ProjectCard component and removed redundant React imports
metadata:
  type: project
---

**2026-07-07:** 

- Extracted `ProjectCard` (`src/components/projects/ProjectCard.jsx`) — shared cover/gradient/overlay card used by both `ProjectsSection` (home) and `ProjectsGallery` (/projects), eliminating ~40 lines of duplicate JSX.
- Removed redundant `import React` from 19 files (React 19 automatic JSX transform makes it unnecessary unless using `React.xxx` directly). Only `MaterialIcon.jsx` retains it for `React.memo`.
- Cleaned duplicate `/loop` cron (older one cancelled).

**Why:** DRY principle for card rendering; bundle size reduction from unused imports; single source of truth for project card styling.
