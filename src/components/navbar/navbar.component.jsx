import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  NavbarContainer,
  LogoContainer,
  LogoImg,
  Anchor,
  Ul,
  Li,
} from "./navbar.styles";

import Logo from "../../assets/images/logo.svg";

const NavbarBootStrap = ({ currentUser }) => {
  let navigate = useNavigate();

  return (
    <NavbarContainer>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand>
            <LogoContainer to="/">
              <LogoImg>
                <img src={Logo} style={{ width: "40px" }} />
              </LogoImg>
            </LogoContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Ul as={Nav} className="ms-auto" navbarScroll>
              <Li>
                <Anchor
                  as={Nav.Link}
                  onClick={() => {
                    navigate("/lifestyle");
                  }}
                >
                  back to lifestyle page
                </Anchor>
              </Li>
            </Ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(NavbarBootStrap);
