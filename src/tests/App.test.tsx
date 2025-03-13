import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
test("Testing the app component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText("Hey!!! Welcome to Cloud_Adventure")).toBeDefined();
});
test('renders Register page on "/register" route', async () => {
  render(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Register Here!/i)).toBeDefined();
});
