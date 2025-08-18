# Code Style and Conventions

## Prettier Configuration
The project uses Prettier for code formatting with the following rules:
- **No semicolons**: `"semi": false`
- **Single quotes**: `"singleQuote": true`
- **JSX single quotes**: `"jsxSingleQuote": true`
- **No trailing commas**: `"trailingComma": "none"`
- **Arrow function parentheses**: `"arrowParens": "avoid"`

## JavaScript/TypeScript Configuration
- **JSX Support**: React JSX enabled
- **Target**: ES6
- **Synthetic Default Imports**: Enabled for better module compatibility

## Path Aliases (jsconfig.json)
```javascript
"@solid-ui-components/*": ["packages/solid-ui/solid-ui-components/src/*"]
"@solid-ui-layout/*": ["packages/solid-ui/solid-ui-layout/src/*"]
"@solid-ui-theme/*": ["packages/solid-ui/solid-ui-theme/src/*"]
"@solid-ui-blocks/*": ["packages/solid-ui/solid-ui-blocks/src/*"]
"@components/*": ["packages/flow-ui/flow-ui-components/src/*"]
"@layout/*": ["packages/flow-ui/flow-ui-layout/src/*"]
"@widgets/*": ["packages/flow-ui/flow-ui-widgets/src/*"]
```

## Content Writing Conventions
### MDX Post Structure
- **Frontmatter**: YAML metadata including title, category, author, tags, date, thumbnail, featured
- **Content**: Markdown with JSX components support
- **Images**: Referenced locally with descriptive alt text
- **Categories**: Must match existing category files

### File Organization
- **Posts**: `/site/content/posts/{category}/{post-slug}/index.mdx`
- **Images**: Co-located with posts as `image.jpg` or `{descriptive-name}.jpg`
- **Authors**: `/site/content/authors/{author-slug}.json`
- **Categories**: `/site/content/categories/{category-name}.json`

## Naming Conventions
- **Files**: kebab-case for directories and files
- **URLs**: Slug-based URLs matching directory structure
- **Assets**: Descriptive names for images and icons

## Git Practices
- Standard .gitignore excluding node_modules, build artifacts, environment files
- VSCode workspace settings preserved (specific files only)