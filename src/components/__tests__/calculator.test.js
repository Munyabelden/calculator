import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";

test("renders the calculator component", () => {
  render(<Calculator />);
  const headingElement = screen.getByText(/Let's do some math!/i);
  expect(headingElement).toBeInTheDocument();
});

test("adds two numbers correctly", () => {
  render(<Calculator />);
  const button1 = screen.getByText("1");
  const button2 = screen.getByText("2");
  const addButton = screen.getByText("+");
  const equalsButton = screen.getByText("=");
  const result = screen.getByTestId("result");

  fireEvent.click(button1);
  fireEvent.click(addButton);
  fireEvent.click(button2);
  fireEvent.click(equalsButton);

  expect(result).toHaveTextContent("3");
});

test("subtracts two numbers correctly", () => {
  render(<Calculator />);
  const button4 = screen.getByText("4");
  const button3 = screen.getByText("3");
  const subtractButton = screen.getByText("-");
  const equalsButton = screen.getByText("=");
  const result = screen.getByTestId("result");

  fireEvent.click(button4);
  fireEvent.click(subtractButton);
  fireEvent.click(button3);
  fireEvent.click(equalsButton);

  expect(result).toHaveTextContent("1");
});

test("multiplies two numbers correctly", () => {
 render(<Calculator />);

  const button5 = screen.getByText("5");
  const button7 = screen.getByText("7");
  const multiply = screen.getByText("x");
  const equals = screen.getByText("=");
  const result = screen.getByTestId("result");

  fireEvent.click(button5);
  fireEvent.click(multiply);
  fireEvent.click(button7);
  fireEvent.click(equals);

  expect(result).toHaveTextContent("35");
});

test("divide two numbers correctly", () => {
  render(< Calculator />);

  const button10 = screen.getByText("8");
  const button5 = screen.getByText("4");
  const divide = screen.getByText("÷");
  const equals = screen.getByText("=");
  const result = screen.getByTestId("result");

  fireEvent.click(button10);
  fireEvent.click(divide);
  fireEvent.click(button5);
  fireEvent.click(equals);

  expect(result).toHaveTextContent("2");
});
