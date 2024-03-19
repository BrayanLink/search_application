import { render, screen } from "@testing-library/react";
import App from "./App";

test("should have title", () => {
  render(<App />);
  const title = screen.getByText(/Hello World/i);
  expect(title).toBeInTheDocument();
});
