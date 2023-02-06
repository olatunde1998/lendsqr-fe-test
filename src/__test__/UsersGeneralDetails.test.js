import { render, screen } from "@testing-library/react";
import UsersGeneralDetails from "pages/UsersGeneralDetails";
import { BrowserRouter as Router } from "react-router-dom";

describe("UsersGeneralDetails component", () => {
  test("docs links", () => {
    render(
      <Router>
        <UsersGeneralDetails />
      </Router>
    );
    const element = screen.getByText(/docs/i);
    expect(element).toBeInTheDocument();
  });

  test("input element", () => {
    render(
      <Router>
        <UsersGeneralDetails />
      </Router>
    );
    const element = screen.getByText(/anonymous/i);
    expect(element).toBeInTheDocument();
  });
});
