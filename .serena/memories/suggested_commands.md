# Suggested Commands for Development

## Essential Development Commands

### Site Development (run from /site directory or root)
```bash
# Start development server
npm run develop
# or
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clean Gatsby cache and public folder
npm run clean
```

### Monorepo Management (run from root)
```bash
# Clean all node_modules in all packages
npm run clean

# Version and release packages
npm run release
```

## Node.js Version Management
```bash
# Use correct Node.js version (v18.14)
nvm use
# or install if not available
nvm install
```

## Content Management Commands
```bash
# Navigate to content directory
cd site/content

# Create new post structure
mkdir -p posts/{category}/{post-slug}
```

## System Utilities (Windows)
```bash
# List directory contents
dir
# or for detailed view
dir /a

# Change directory
cd {directory}

# Find files
dir /s /b *.{extension}

# Search in files
findstr /s /i "search_term" *.{extension}

# Copy files
copy {source} {destination}

# Move files
move {source} {destination}

# Remove files/directories
del {file}
rmdir /s {directory}
```

## Git Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "commit message"

# Push changes
git push

# Pull latest changes
git pull
```

## Package Management
```bash
# Install dependencies
npm install

# Install specific package
npm install {package-name}

# Install dev dependency
npm install --save-dev {package-name}

# Update packages
npm update

# Check for outdated packages
npm outdated
```