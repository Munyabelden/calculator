import React from "react";
import { render, screen } from "@testing-library/react";
import Qoute from "../displayQoute";

const mockResponse = {
  quote: "/Love is enough/",
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([mockResponse]),
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});

test("displays the quote and author", async () => {
  render(<Qoute />);
  const quoteElement = await screen.findByText(mockResponse.quote, "i");
  expect(quoteElement).toBeInTheDocument();
});
