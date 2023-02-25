import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { MenuItem, Select } from "@material-ui/core";

import "./style.scss";
import { CryptoState } from "../../CryptoContext";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  console.log(currency, "baju");

  return (
    <Navbar bg="light" expand="lg" className="py-3 main_header">
      <Container>
        <Navbar.Brand
          style={{ fontSize: "22px", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Crypto Hunter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/login">
              <button className="auth_button">LOGIN</button>
            </Link>
          </Nav>

          <Select
            // className="ms-auto"
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            style={{ width: 100, height: 40, marginLeft: 15 }}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
