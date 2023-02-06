import { render, screen } from "@testing-library/react";
import LoginComponent from "components/LoginComponet/LoginComponent";
import { BrowserRouter as Router } from "react-router-dom";


describe("login component", ()=>{
    test("renders learn react link", () => {
        render(
          <Router>
            <LoginComponent />
          </Router>
        );
        const element = screen.getByText(/login/i);
        expect(element).toBeInTheDocument();
      });

      test("renders forget password", () => {
        render(
          <Router>
            <LoginComponent />
          </Router>
        );
        const element = screen.getByText(/forget password/i);
        expect(element).toBeInTheDocument();
      });

})



