---
name: integration-testing
description: "[STEP 3/3 — INTEGRATION TESTING] Write and run integration tests for this Astro + React portfolio site covering data flows, API endpoints, and cross-component behavior. Only start after both UI (step 1) and UI Testing (step 2) are complete. Use when the user asks about testing, test coverage, test debugging, or quality assurance."
---

# Integration Testing Skill

## Workflow

This is **STEP 3 of 3** in the project workflow. Only start after both UI (step 1) and UI Testing (step 2) are complete. Do not write integration tests before the UI and UI Testing layers are finalized.

You are an integration testing specialist for **gelembungsahabat.github.io** — an Astro + React portfolio site. Write and maintain integration-level tests covering cross-component behavior, data flows, API routes, and full-page scenarios.

## Test Stack

- **Vitest** — Test runner v4+
- **React Testing Library** — Rendering and queries
- **@testing-library/jest-dom** — Custom DOM matchers
- **@testing-library/user-event** — User interaction simulation
- **jsdom** — Browser environment simulation
- **@vitest/coverage-v8** — Code coverage reporter

## Integration Test Focus Areas

### 1. App-Level Integration
Test that all sections render together correctly in `App.tsx`:
```typescript
import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders all sections in the correct order", () => {
  render(<App />);
  const headings = screen.getAllByRole("heading", { level: 2 });
  expect(headings[0]).toHaveTextContent(/about me/i);
  expect(headings[1]).toHaveTextContent(/skills/i);
  // ... etc
});
```

### 2. Cross-Component Data Flow
Test that data flows correctly from data layer through components:
```typescript
// Verify experience data renders with correct structure
it("renders experience with responsibilities and achievements", () => {
  render(<Experience />);
  expect(screen.getByText(/responsibilities/i)).toBeInTheDocument();
  expect(screen.getByText(/key achievements/i)).toBeInTheDocument();
  expect(screen.getByText(/technologies/i)).toBeInTheDocument();
});
```

### 3. Form Submission Pipeline
Test the full form flow: validation → API call → success/error → toast:
```typescript
it("completes full contact form submission flow", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
    new Response(JSON.stringify({ success: true, message: "Received!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );

  const user = userEvent.setup();
  render(<Contact />);

  await user.type(screen.getByRole("textbox", { name: /name/i }), "John");
  await user.type(screen.getByRole("textbox", { name: /email/i }), "john@test.com");
  await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello, this is a test message.");
  await user.click(screen.getByRole("button", { name: /send message/i }));

  await waitFor(() => {
    expect(screen.getByText(/received/i)).toBeInTheDocument();
  });
});
```

### 4. API Route Testing
Test the Astro API endpoint (`src/pages/api/contact.ts`):
```typescript
// This requires a full Astro environment — use Astro's test utilities
it("POST /api/contact returns 200 for valid data", async () => {
  const response = await fetch("http://localhost:4321/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Test", email: "test@test.com", message: "Hello world test" }),
  });
  expect(response.status).toBe(200);
});
```

### 5. Service Layer Testing
Test service functions directly (`src/services/contact-form.ts`):
```typescript
import { validateField, validateForm, submitContactForm } from "../services/contact-form";

it("rejects empty form", () => {
  const errors = validateForm({ name: "", email: "", message: "" });
  expect(errors.name).toBeDefined();
  expect(errors.email).toBeDefined();
  expect(errors.message).toBeDefined();
});
```

## Integration Testing Checklist

- [ ] Test **App.tsx** — all sections render together
- [ ] Test **section order** — matches the layout in App.tsx
- [ ] Test **form submission** — full validation → API → toast pipeline
- [ ] Test **API route** — valid/invalid payloads, error responses
- [ ] Test **service functions** — validation logic, submission logic
- [ ] Test **data-driven components** — each component renders its data correctly
- [ ] Test **error boundaries** — network failure, API errors, empty data
- [ ] Test **accessibility** — aria attributes, heading hierarchy, roles

## Key Commands

```bash
pnpm test              # Run all tests
pnpm test -- --watch   # Watch mode
pnpm test -- --coverage # Run with coverage report
pnpm dev               # Start dev server for API route testing
```