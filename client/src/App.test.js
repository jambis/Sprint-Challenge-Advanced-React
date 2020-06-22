import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Text Test", () => {
  test("Loads Header text", () => {
    const { getByText } = render(<App />);

    expect(getByText(/Women's World Cup - Google Trends/i)).toBeTruthy();
  });
});
