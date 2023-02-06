import { render, screen } from "@testing-library/react";
import Header from "components/navBar/Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header component", () => {
  test("docs link", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const element = screen.getByText(/docs/i);
    expect(element).toBeInTheDocument();
  });

  test("input element", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const element = screen.getByText(/anonymous/i);
    expect(element).toBeInTheDocument();
  });
});
