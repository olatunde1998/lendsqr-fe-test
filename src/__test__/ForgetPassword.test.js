import { render, screen } from "@testing-library/react";
import ForgetPassword from "pages/ForgetPassword";
import { BrowserRouter as Router } from "react-router-dom";

describe("signup component", () => {
  test("renders signup an account paragraph", () => {
    render(
      <Router>
        <ForgetPassword />
      </Router>
    );
    const element = screen.getByText(/Enter new details/i);
    expect(element).toBeInTheDocument();
  });

  test("renders forget password button", () => {
    render(
      <Router>
        <ForgetPassword />
      </Router>
    );
    const element = screen.getByText(/Reset Password/i);
    expect(element).toBeInTheDocument();
  });
});
