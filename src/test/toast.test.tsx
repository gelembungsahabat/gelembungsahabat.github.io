import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";

import { Toast } from "../components/ui/toast";

describe("<Toast />", () => {
  it("renders nothing when isVisible is false", () => {
    const { container } = render(
      <Toast message="Test message" isVisible={false} onClose={vi.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders the toast when isVisible is true", () => {
    render(
      <Toast message="Test message" isVisible={true} onClose={vi.fn()} />
    );
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("has status role for accessibility", () => {
    render(
      <Toast message="Test message" isVisible={true} onClose={vi.fn()} />
    );
    const toast = screen.getByRole("status");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(toast).toHaveAttribute("aria-atomic", "true");
  });

  it("calls onClose immediately when duration is 0", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(
      <Toast
        message="Test message"
        isVisible={true}
        onClose={onClose}
        duration={0}
      />
    );

    // Duration 0 still uses setTimeout(0) which is a macrotask
    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("calls onClose after a custom duration", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(
      <Toast
        message="Test message"
        isVisible={true}
        onClose={onClose}
        duration={100}
      />
    );

    act(() => {
      vi.advanceTimersByTime(99);
    });
    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("cleans up the timer on unmount", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const { unmount } = render(
      <Toast message="Test message" isVisible={true} onClose={onClose} />
    );

    unmount();

    vi.advanceTimersByTime(3000);
    expect(onClose).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("does not start a timer when isVisible becomes false", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const { rerender } = render(
      <Toast message="Test message" isVisible={true} onClose={onClose} />
    );

    rerender(
      <Toast message="Test message" isVisible={false} onClose={onClose} />
    );

    vi.advanceTimersByTime(3000);
    expect(onClose).not.toHaveBeenCalled();
    vi.useRealTimers();
  });
});