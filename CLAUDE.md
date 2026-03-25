# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JK-study is a Korean-language personal study documentation site built with **VitePress** (v2.0.0-alpha.12). It contains structured learning notes on:
- **Functional Programming** (based on "쏙쏙 들어오는 함수형 코딩")
- **React internals and deep-dive topics**

**Important**: See `AGENTS.md` for detailed coding conventions, markdown structure, and naming guidelines.

## Essential Commands

**Package Manager**: Must use `pnpm` (v10.12.4+) - never use npm or yarn.

```bash
# Development (hot reload on localhost)
pnpm docs:dev

# Production build (always run before committing new content)
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Architecture Overview

This is a **static site generator** project with the following workflow:

1. **Content Layer**: Markdown files with YAML frontmatter
   - Organized by topic: `functional-programming/` and `react/`
   - Chapter files follow `ch{NN}.md` pattern (zero-padded)
   - Each topic has an `index.md` overview and `asset/` folder for images

2. **Configuration Layer**: `.vitepress/config.mts`
   - Defines navigation structure and sidebar hierarchy
   - Korean locale (ko-KR) with custom labels
   - **Manual sidebar management** - must be updated when adding new chapters

3. **Build Layer**: VitePress compilation
   - Validates internal links (build fails on broken links)
   - Generates static HTML/CSS/JS in `.vitepress/dist/`
   - Images must exist at referenced paths (case-sensitive)

## Adding New Content Workflow

When adding a new chapter or updating the table of contents:

1. **Create the chapter file** with proper frontmatter:
   ```yaml
   ---
   title: 챕터 제목
   description: 간단한 설명
   author: JK
   editLink: true
   lastUpdated: 2026-03-25
   ---
   ```

2. **Update the sidebar** in `.vitepress/config.mts`:
   - Find the appropriate section (Functional Programming or React)
   - Add the sidebar entry matching the pattern:
     ```typescript
     {
       text: "N. 챕터 제목",
       link: "/topic/partN/chNN"
     }
     ```

3. **Update the index.md** for that topic:
   - Add link to the new chapter in the "목차" (table of contents) section

4. **Verify the build**:
   ```bash
   pnpm docs:build
   ```
   - Fix any broken links or missing images reported

## Key Configuration Details

### Sidebar Structure (`.vitepress/config.mts`)

The sidebar is **manually managed** with a nested structure:
- Level 1: Topic area (e.g., "React")
- Level 2: Sub-section (e.g., "Hooks", "Scheduler & Priority")
- Level 3: Individual chapters

Changes to sidebar require understanding the full hierarchy. Always maintain the existing collapsed/expanded states (`collapsed: false`).

### Content Sections

**Functional Programming** has two parts:
- Part 1 (Chapters 3-9): Actions, Calculations, Data
- Part 2 (Chapters 10-19): First-Class Abstractions

**React** is organized by topic:
- Hooks (Chapters 6-9)
- Scheduler & Priority (Chapter 12+)

### Image Handling

- Store images in `{topic}/asset/ch{NN}/` subfolders
- Reference with absolute paths from repo root: `/react/asset/ch06/hook.png`
- VitePress will copy these to the build output automatically

## Common Issues

1. **Build fails with "dead link"**:
   - Check the link path matches the actual file location
   - Links should be relative from repo root (e.g., `/react/part1/ch06`)
   - Don't include `.md` extension in links

2. **Sidebar not showing new chapter**:
   - Must manually add entry to `.vitepress/config.mts` sidebar array
   - Restart dev server after config changes

3. **Image not displaying**:
   - Verify file exists at the exact path (case-sensitive)
   - Use absolute path from root: `/topic/asset/chNN/image.png`

## Content Language and Style

- Content is in **Korean** (ko-KR locale)
- Technical terms often kept in English (e.g., "Side Effect", "Hook")
- Chapter titles follow: "{Number}. {Korean Title}"
- Use blockquotes (`>`) for key concepts and definitions
- Code blocks should specify language (tsx, jsx, bash, etc.)
