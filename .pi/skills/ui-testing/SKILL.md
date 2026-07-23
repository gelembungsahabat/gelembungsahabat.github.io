---
name: ui-testing
description: "[STEP 2/3 — UI TESTING] Write and run UI component tests using Vitest + React Testing Library for this Astro + React portfolio site. Only start after UI (step 1) is complete. Continue to Integration Testing (step 3) after this step. Use when writing unit/component tests, setting up test utilities, mocking dependencies, or verifying UI behavior."
---

# UI Testing Skill

## Workflow

This is **STEP 2 of 3** in the project workflow. Only start after UI (step 1) is complete. When done, continue to Integration Testing (step 3).

You are a UI testing specialist for **gelembungsahabat.github.io** — an Astro + React portfolio site. Write and maintain component-level tests using the stack and conventions below.

## Test Stack

- **Vitest** — Test runner v4+
- **React Testing Library** — Component rendering and queries
- **@testing-library/jest-dom** — Custom DOM matchers (`.toBeInTheDocument()`, `.toHaveAttribute()`, etc.)
- **@testing-library/user-event** — Simulating user interactions
- **jsdom** — Browser environment simulation

## Test File Organization

```
src/test/
├── setupTests.ts            # Global setup (imports jest-dom)
└── *.test.tsx               # One test file per component
```

**Convention:** Place test files in `src/test/` with the naming pattern `<component-name>.test.tsx`.

## Component Testing Patterns

### 1. Rendering & Queries
```typescript
import { render, screen } from "@testing-library/react";
import { MyComponent } from "../path/to/component";

render(<MyComponent prop="value" />);
// By role (preferred): screen.getByRole("heading", { name: /text/i })
// By text: screen.getByText(/pattern/i)
// By label: screen.getByLabelText(/label/i)
// By test ID (last resort): screen.getByTestId("my-id")
```

### 2. Mocking Data Imports
When a component imports data from `src/data/`, mock it for isolated tests:
```typescript
vi.mock("../../data", () => ({
  skillsData: [
    { category: "Frontend", skills: [{ name: "React" }] },
  ],
}));
```

### 3. Mocking Service Modules
When a component calls a service (e.g., form submission), mock it:
```typescript
vi.mock("../../services/contact-form", () => ({
  submitContactForm: vi.fn().mockResolvedValue({
    success: true,
    message: "Success!",
  }),
}));
```

### 4. Mocking fetch / Network
```typescript
vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
  new Response(JSON.stringify({ ok: true }), { status: 200 })
);
```

### 5. User Interactions
```typescript
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
await user.click(button);
await user.type(input, "text");
await user.tab(); // blur / focus shift
```

### 6. Form Validation Tests
```typescript
it("shows validation error on blur", async () => {
  const user = userEvent.setup();
  render(<MyForm />);
  const input = screen.getByRole("textbox", { name: /email/i });
  await user.click(input);
  await user.tab(); // blur
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});
```

### 7. Toast / Notification Tests
```typescript
it("shows success toast after submit", async () => {
  render(<MyForm />);
  await user.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
```

### 8. Loading State Tests
```typescript
it("disables button during submission", async () => {
  render(<MyForm />);
  await user.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
});
```

## Mocking strategies by component

| Component | What to mock | How |
|-----------|-------------|-----|
| Hero | — | Pure rendering, no mocking needed |
| About | — | Pure rendering, no mocking needed |
| Skills | `skillsData` from `../../data` | `vi.mock` |
| Experience | `experienceData` from `../../data` | `vi.mock` |
| Articles | `articleListData` from `../../data` | `vi.mock` |
| Portfolio | `portfolioListData` from `../../data` | `vi.mock` |
| Contact | `submitContactForm` from `../../services/contact-form` | `vi.mock` or spy on `fetch` |
| Toast | `onClose` callback | Pass `vi.fn()` as prop |

## Accessibility Testing Checklist

- [ ] Verify heading hierarchy (h1 → h2 → h3)
- [ ] Check `aria-label` on icon-only links/buttons
- [ ] Verify `aria-invalid` on form fields with errors
- [ ] Use `role` attributes where semantic HTML is insufficient
- [ ] Check `aria-live` regions for toast notifications

## Key Commands

```bash
pnpm test              # Run all tests
pnpm test -- --watch   # Watch mode
pnpm test -- --ui      # Vitest UI dashboard
pnpm test -- --coverage # Run with coverage report
```