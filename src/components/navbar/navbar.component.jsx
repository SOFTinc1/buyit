import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  NavbarContainer,
  LogoContainer,
  Logoh1,
  Anchor,
  Ul,
  Li,
} from "./navbar.styles";

// import Logo from "../../assets/images/icon.svg";

const NavbarBootStrap = ({ currentUser }) => (
  <NavbarContainer>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand>
          <LogoContainer to="/">
            <Logoh1>_buyIT</Logoh1>
            {/* <LogoImg>
              <img src={Logo} style={{ width: "40px" }}/>
            </LogoImg> */}
          </LogoContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Ul as={Nav} className="ms-auto" navbarScroll>
            <Li as={Nav.Item}>
              <Anchor as={Nav.Link} to="/">
                home
              </Anchor>
            </Li>
            <Li as={Nav.Item} to="/shop">
              <Anchor as={Nav.Link} to="/shop">
                shop
              </Anchor>
            </Li>
            <Li as={Nav.Item}>
              <Anchor as={Nav.Link} to="/signin">
                sign in
              </Anchor>
            </Li>
            <Li as={Nav.Item}>
              <Anchor as={Nav.Link} to="/contact">
                contact
              </Anchor>
            </Li>
          </Ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </NavbarContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(NavbarBootStrap);
