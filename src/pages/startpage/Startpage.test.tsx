import {expect, test} from "vitest";
import Startpage from "./Startpage";
import { render,screen } from "@testing-library/react";
test("testing the startpage text", () => {
    render(<Startpage />);
    expect(screen.getByText("Hey!!! Welcome to Cloud_Adventure")).toBeDefined();
});