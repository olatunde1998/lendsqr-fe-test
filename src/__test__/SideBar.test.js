import { render, screen } from "@testing-library/react";
import SideBar from "components/sideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";


describe("SideBar component", () => {
  test("docs link", () => {
    render(
      <Router>
        <SideBar />
      </Router>
    );
    const element = screen.getByText(/Customers/i);
    expect(element).toBeInTheDocument();
  });

  it("should render user paragraph", () => {
    render(
      <Router>
        <SideBar />
      </Router>
    );
    const element = screen.getByText(/Users/i);
    expect(element).toBeInTheDocument();
  });
});
