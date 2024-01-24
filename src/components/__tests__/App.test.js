import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

test("Should load login component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const button = screen.getAllByText("Challenges");
  expect(button).toBeTruthy();
});
