import React from "react";
import Home from "../src/pages/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Homepage", () => {
  it("renders the div that says 'yooo'", () => {
    render(<Home />);
    const yooo = screen.getByText(/yooo/i);
    expect(yooo).toBeInTheDocument();
  });
});
