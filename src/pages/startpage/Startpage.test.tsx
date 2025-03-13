import { expect, test } from "vitest";
import Startpage from "./Startpage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("testing the startpage text", () => {
  render(
    <BrowserRouter>
      <Startpage />
    </BrowserRouter>
  );
  expect(screen.getByText("Hey!!! Welcome to Cloud_Adventure")).toBeDefined();
});
