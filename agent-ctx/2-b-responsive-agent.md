# Task 2-b: Make 3 Dashboard Pages Responsive

## Summary
Applied responsive Tailwind CSS classes to 3 dashboard page components: Consensus, Récompenses, and Modération.

## Changes Made

### consensus.tsx
- Stats grid: `grid-cols-4` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Filter row: `flex items-center gap-3` → `flex flex-wrap items-center gap-3`
- Search input: `flex-1 max-w-sm` → `flex-1 w-full sm:max-w-sm`
- Table: Wrapped `<table>` in `<div className="overflow-x-auto">`

### recompenses.tsx
- Header: `flex items-center justify-between` → `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`
- Stats grid: `grid-cols-4` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Filter row: `flex items-center gap-3` → `flex flex-wrap items-center gap-3`
- Search input: `flex-1 max-w-sm` → `flex-1 w-full sm:max-w-sm`
- Table: Wrapped `<table>` in `<div className="overflow-x-auto">`

### moderation.tsx
- Header: `flex items-center justify-between` → `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`
- Stats grid: `grid-cols-3` → `grid-cols-1 sm:grid-cols-3`
- Filter row: `flex items-center gap-3` → `flex flex-wrap items-center gap-3`
- Search input: `flex-1 max-w-sm` → `flex-1 w-full sm:max-w-sm`
- Table: Wrapped `<table>` in `<div className="overflow-x-auto">`

## Verification
- `bun run lint` passes with zero errors
- No data, logic, or functionality changes — only Tailwind CSS class modifications
