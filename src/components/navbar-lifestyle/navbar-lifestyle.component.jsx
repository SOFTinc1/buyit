import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  NavbarContainer,
  LogoContainer,
  LogoImg,
  Anchor,
  Ul,
  Li,
  CartT
} from "./navbar-lifestyle.styles";
import "./navbar-lifestyle.styles.scss";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import Logo from "../../assets/images/logo.svg";

const NavbarBootStrapLifestyle = ({ hidden }) => {
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
                    navigate("/");
                  }}
                  style={{ color: "#fff" }}
                >
                  top
                </Anchor>
              </Li>

              <Li>
                <Anchor
                  as={Nav.Link}
                  onClick={() => {
                    navigate("/shop");
                  }}
                  style={{ color: "#fff" }}
                >
                  shop
                </Anchor>
              </Li>

              <Li>
                <Anchor
                  as={Nav.Link}
                  onClick={() => {
                    navigate("/music");
                  }}
                  style={{ color: "#fff" }}
                >
                  music
                </Anchor>
              </Li>
              <CartT as={CartIcon} />
            </Ul>
          </Navbar.Collapse>
        </Container>
        {hidden ? null : <CartDropdown />}
      </Navbar>
    </NavbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(NavbarBootStrapLifestyle);