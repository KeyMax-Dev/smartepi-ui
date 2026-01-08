# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-beta.3] - 2026-01-08

### Fixed
- **Critical**: Fixed infinite re-render loop in Checkbox component caused by improper useEffect dependencies
- **Critical**: Fixed infinite re-render loop in Select component caused by function reference in useEffect dependencies
- **Checkbox**: Removed `event` from useEffect dependencies that was causing "Maximum update depth exceeded" error
- **Select**: Fixed `inputValue.toLocaleLowerCase` function reference in useEffect dependencies

### Changed
- Checkbox component now calls `onToggle` callback directly in the toggle handler instead of in useEffect
- Select component now properly uses the string value of `inputValue` in useEffect dependencies instead of the function reference

### Technical Details
These fixes resolve the "Maximum update depth exceeded" errors that were occurring in React 18+ applications, particularly when using Vite as the build tool.

## [1.0.0-beta.2] - 2026-01-08

### Fixed
- **Vite Compatibility**: Fixed `styled is not a function` error when using with Vite
- **Module System**: Now correctly generates both ESM (`index.esm.js`) and CJS (`index.js`) builds
- **External Dependencies**: `styled-components`, `react`, `react-dom`, and `framer-motion` are now correctly treated as external dependencies instead of being bundled
- **Package Exports**: Added proper `exports` field in package.json for better module resolution

### Changed
- Updated build configuration to generate separate ESM and CJS outputs
- Removed `esModule: false` flag that was causing module interop issues
- Added `sideEffects: false` for better tree-shaking support
- Added `files` field to package.json to ensure only necessary files are published

### Technical Details
- Build now uses Rollup to generate:
  - `build/index.esm.js` - ESM format for modern bundlers (Vite, Webpack 5+)
  - `build/index.js` - CommonJS format for legacy compatibility
- Package.json exports field provides explicit entry points for both formats
- All peer dependencies are marked as external to prevent bundling

## [1.0.0-beta.1] - 2025-01-XX

### Added
- Initial beta release
- 22 React components with TypeScript support
- Framer Motion animations
- Styled Components theming
- Form validation system
- Dark/light theme support
