# AGENTS.md - JK-study

> Coding agent instructions for this VitePress documentation repository.

## Project Overview

A Korean-language personal study archive built with **VitePress**. Contains structured learning notes on:
- Functional Programming (쏙쏙 들어오는 함수형 코딩 book)
- React internals

## Build & Development Commands

```bash
# Package manager: pnpm (v10.12.4)
# Always use pnpm, not npm or yarn

# Development server (localhost with hot reload)
pnpm docs:dev

# Production build
pnpm docs:build

# Preview production build locally
pnpm docs:preview

# Install dependencies (after cloning)
pnpm install
```

### Verification Checklist
- [ ] `pnpm docs:build` completes without errors
- [ ] No broken internal links (VitePress reports these during build)
- [ ] Images referenced in markdown files exist in correct paths

## Project Structure

```
JK-study/
├── .vitepress/
│   └── config.mts          # VitePress configuration (nav, sidebar, theme)
├── functional-programming/
│   ├── index.md            # Study guide overview
│   ├── asset/              # Images for this section
│   ├── part1/              # Chapters 3-9
│   │   └── ch{NN}.md
│   └── part2/              # Chapters 10-19
│       └── ch{NN}.md
├── react/
│   ├── asset/              # Images for React notes
│   └── *.md                # React study notes
├── index.md                # Homepage
└── package.json
```

## Code Style Guidelines

### Markdown Frontmatter (REQUIRED for all content files)

```yaml
---
title: 챕터 제목           # Required: Page title
description: 간단한 설명   # Required: SEO description
author: JK                 # Author name
editLink: true             # Enable "Edit on GitHub" link
lastUpdated: 2025-08-19    # ISO date format (YYYY-MM-DD)
---
```

### Markdown Structure

1. **Single H1 per file** - Use `#` for main title (matches frontmatter title)
2. **Section hierarchy**: `##` for major sections, `###` for subsections
3. **Numbered lists** for sequences/steps
4. **Bullet lists** (`-`) for non-sequential items
5. **Blockquotes** (`>`) for definitions and key concepts

### Code Blocks

- Use `tsx` or `jsx` for React/TypeScript code examples
- Use `bash` for terminal commands
- Include file path comments when showing source code:

```tsx
// /path/to/file.ts
function example() {
  // code
}
```

### Korean Content Guidelines

- Write content in Korean (ko-KR locale)
- Technical terms may remain in English (e.g., "Side Effect", "Queue", "Linked List")
- Use Korean punctuation and spacing conventions
- Chapter titles follow pattern: "chp{N}. {Korean title}"

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Chapter files | `ch{NN}.md` (zero-padded) | `ch03.md`, `ch14.md` |
| Index files | `index.md` | `functional-programming/index.md` |
| Image folders | `asset/` (lowercase) | `react/asset/ch06/` |
| Image subfolders | `ch{NN}/` for chapter-specific | `asset/ch06/hook.png` |

### Image References

- Store images in `asset/` subdirectory within each topic folder
- Reference with relative paths from markdown file:
```markdown
![hook.png](/react/asset/ch06/hook.png)
```

## VitePress Configuration

Location: `.vitepress/config.mts`

Key settings to maintain:
- `lang: "ko-KR"` - Korean locale
- `editLink.pattern` - Points to GitHub for editing
- `sidebar` - Manually managed chapter navigation

### Adding New Content

1. Create markdown file with proper frontmatter
2. Update sidebar in `.vitepress/config.mts`
3. Run `pnpm docs:build` to verify

### Sidebar Entry Format

```typescript
{
  text: "N. 챕터 제목",
  link: "/functional-programming/partN/chNN"
}
```

## Error Handling

- **Dead links**: VitePress fails on broken internal links. Fix or remove them.
- **Missing images**: Verify path and filename (case-sensitive on Linux/macOS)
- Always validate frontmatter YAML syntax
- Ensure code blocks have language identifiers

## Git Conventions

- Commit messages in Korean or English
- Branch naming: `feature/topic-name` or `fix/issue-description`

## Do NOT

- Delete or rename existing chapter files without updating sidebar config
- Use absolute paths for images (use relative paths starting with `/`)
- Add external dependencies without discussion
- Modify `.vitepress/cache/` (gitignored)
- Use `npm` or `yarn` (this project uses `pnpm`)
