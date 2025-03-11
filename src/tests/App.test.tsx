import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
test("Testing the app component", () => {
  render(<App />);
  expect(screen.getByText("hello")).toBeDefined();
});
