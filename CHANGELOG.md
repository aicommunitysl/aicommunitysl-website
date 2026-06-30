# Changelog

All notable changes to this project are documented in this file.

Changes are organized into the following categories:

- **Added:** New features or functionality introduced to the project.
- **Changed:** Modifications to existing functionality that do not add new features.
- **Fixed:** Bug fixes that resolve issues or correct unintended behavior.
- **Removed:** Features or components that have been removed from the project.

## [Unreleased]

- Changes for the next release are available in development branches.

## [1.0.0] - 2026-06-30

### Added

- Added local static datasets for events, milestones, partners, social links, and team members under `data/`.
- Added a local data access layer (`lib/data.ts`) to serve all website content without API/CMS runtime dependencies.

### Changed

- Updated event, team, partner, journey, footer, and community link sections to consume local static data.
- Updated event listing behavior to show meaningful content when no upcoming events are currently available.
- Updated navigation and page actions to remove dependencies on the contact route.

### Removed

- Removed API client integration (`lib/api.ts`) and all direct runtime API requests.
- Removed contact page, contact form components, and contact server action.
- Removed API-related environment variable usage from runtime configuration.
- Removed localhost image hostname allowance that was previously required for API-hosted assets.

<!-- e.g., -->
<!-- Unreleased -->
<!-- v2.0.0 -->
<!-- v1.1.0 -->
<!-- v1.0.0 -->
<!-- v0.0.1 -->

[Unreleased]: https://github.com/aicommunitysl/.github/branches
[1.0.0]: https://github.com/aicommunitysl/aicommunitysl-website/releases/tag/v1.0.0
