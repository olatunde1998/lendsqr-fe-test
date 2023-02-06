import { render, screen } from "@testing-library/react";
import SignUp from "pages/SignUp";
import { BrowserRouter as Router } from "react-router-dom";

describe("signup component", () => {
  test("renders signup an account paragraph", () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const element = screen.getByText(/Sign up an account/i);
    expect(element).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const element = screen.getByText(/Sign up /i);
    expect(element).toBeInTheDocument();
  });
});
