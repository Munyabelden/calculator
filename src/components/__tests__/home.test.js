import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../home";

test("renders home page content", () => {
  render(<Home />);
  
  expect(screen.getByText("Welcome to our page!")).toBeInTheDocument();
  expect(screen.getByText(/Lorem Ipsum is simply dummy text/)).toBeInTheDocument();
  expect(screen.getByText(/Contrary to popular belief/)).toBeInTheDocument();
});