import { MemoryRouter as Router } from "react-router-dom";
import Login from "./Login";
import { expect, test } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

  test("renders login text", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const registerText = screen.getByText(/Login Here!/i);
    expect(registerText).toBeDefined();
  });
  test("should render username and password", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    expect(screen.getByLabelText(/Firstname/i)).toBeDefined();
    expect(screen.getByLabelText(/Lastname/i)).toBeDefined();
    expect(screen.getByLabelText(/Password/i)).toBeDefined();
    expect(screen.getAllByRole("button", { name: /Login/i })).toBeDefined();
  });
  test("should show validation errors when form is submitted with empty fields", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const submitButton = screen.getAllByRole("button", { name: /Login/i });
    fireEvent.click(submitButton[0]);

    await waitFor(() => {
      expect(
        screen.getByText(/Firstname must be at least 5 characters/i)
      ).toBeDefined();
      expect(
        screen.getByText(/Password must be at least 6 characters/i)
      ).toBeDefined();
    });
  });
