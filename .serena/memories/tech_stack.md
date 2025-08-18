# Tech Stack and Architecture

## Core Technologies
- **Gatsby.js v5.6.0**: React-based static site generator
- **React v18.2.0**: JavaScript library for building user interfaces
- **MDX**: Markdown with JSX components for rich content creation
- **Node.js v18.14**: JavaScript runtime (specified in .nvmrc)

## Project Structure
- **Monorepo**: Managed using Lerna with workspaces
- **Main Site**: Located in `/site` directory
- **Packages**: Modular components in `/packages` directory
  - `blog`: Blog-specific functionality
  - `common`: Shared utilities
  - `flow-ui`: UI component system
  - `plugins`: Gatsby plugins
  - `themes`: Various FlexiBlog themes

## Theme System
- Uses **@elegantstack/gatsby-theme-flexiblog-agency** as the base theme
- Part of the FlexiBlog ecosystem with multiple available themes:
  - agency, beauty, education, medical, minimal, news, personal, science

## Content Management
- **Content Structure**: File-based using MDX files
- **Authors**: JSON files with profile information and social links
- **Categories**: JSON files defining category metadata and styling
- **Posts**: Organized by category with frontmatter metadata

## Build System
- **Development**: `gatsby develop` (also aliased as `start`)
- **Production**: `gatsby build`
- **Preview**: `gatsby serve`
- **Clean**: `gatsby clean`

## Dependencies Management
- **Package Manager**: npm (with package-lock.json)
- **Monorepo**: Lerna for versioning and publishing
- **Image Processing**: Sharp for optimized image handling