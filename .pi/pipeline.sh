#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────
# Pipeline: UI → UI Test → Integration Test
# Runs 3 herdr agents in sequence, each blocking until the previous
# agent finishes its work.
# ──────────────────────────────────────────────────────────────────
set -euo pipefail

PIPELINE_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$PIPELINE_DIR/.." && pwd)"
cd "$PROJECT_DIR"

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  Pipeline: UI → UI Test → Integration Test                 ║"
echo "║  Project: gelembungsahabat.github.io                       ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# ── Agents ───────────────────────────────────────────────────────
UI_AGENT="ui-agent"
UI_TEST_AGENT="ui-test-agent"
INTEGRATION_TEST_AGENT="integration-test-agent"

# ── STEP 1: UI ───────────────────────────────────────────────────
echo ""
echo "▸ STEP 1/3: UI — Building Skills section UI"
echo "────────────────────────────────────────────────────────────────"
herdr agent prompt "$UI_AGENT" \
  "Work on the Skills section UI in this Astro + React portfolio project.
   - The component is at src/components/sections/skills.tsx
   - The CSS is at src/components/sections/styles/skills.css
   - Data comes from src/data/skills-data.tsx
   - Current state: flat comma-separated text in a <p> tag
   - Goal: upgrade to badge-style layout with category cards, icons, and hover effects
   - Follow the design system in src/components/App.css (dark theme, --surface, --border, etc.)
   - Use react-icons/fa for category icons
   - Make it responsive (stack on mobile, side-by-side on desktop)
   - Run 'pnpm build' to verify it compiles" \
  --wait --timeout 300000

echo ""
echo "✓ STEP 1/3 complete. UI agent finished."

# ── STEP 2: UI Test ──────────────────────────────────────────────
echo ""
echo "▸ STEP 2/3: UI Test — Writing tests for Skills section"
echo "────────────────────────────────────────────────────────────────"
herdr agent prompt "$UI_TEST_AGENT" \
  "Write UI component tests for the Skills section in this Astro + React portfolio project.
   - The component is at src/components/sections/skills.tsx
   - The test file should be at src/test/skills.test.tsx
   - Use Vitest + React Testing Library (already configured)
   - Test: renders section heading, category headings, skill badges, accessibility
   - Mock the data import: vi.mock('../../data', ...)
   - Run 'pnpm test' to verify all tests pass" \
  --wait --timeout 300000

echo ""
echo "✓ STEP 2/3 complete. UI Test agent finished."

# ── STEP 3: Integration Test ─────────────────────────────────────
echo ""
echo "▸ STEP 3/3: Integration Test — Writing integration tests"
echo "────────────────────────────────────────────────────────────────"
herdr agent prompt "$INTEGRATION_TEST_AGENT" \
  "Write integration tests for this Astro + React portfolio project.
   - Test file: src/test/skills.integration.test.tsx
   - Test the Skills section renders correctly within App.tsx (full app integration)
   - Test cross-component data flow: verify skills data flows from data layer through component
   - Test accessibility: verify heading hierarchy, aria attributes, roles
   - Run 'pnpm test' to verify all tests pass" \
  --wait --timeout 300000

echo ""
echo "✓ STEP 3/3 complete. Integration Test agent finished."
echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  Pipeline complete! All 3 agents finished.                 ║"
echo "╚══════════════════════════════════════════════════════════════╝"