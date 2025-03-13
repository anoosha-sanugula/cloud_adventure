import { expect, test } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";

test("renders register text", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const registerText = screen.getByText(/Register Here!/i);
  expect(registerText).toBeDefined();
});
test("should render firstname, lastname, password and profile_image fields", () => {
  render(<BrowserRouter>
    <Register />
  </BrowserRouter>);
  expect(screen.getByLabelText(/Firstname/i)).toBeDefined();
  expect(screen.getByLabelText(/Lastname/i)).toBeDefined();
  expect(screen.getByLabelText(/Password/i)).toBeDefined();
  expect(screen.getAllByRole("button", { name: /Register/i })).toBeDefined();
});
test("should show validation errors when form is submitted with empty fields", async () => {
  render(<BrowserRouter>
    <Register />
  </BrowserRouter>);
  const submitButton = screen.getAllByRole("button", { name: /Register/i });
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
