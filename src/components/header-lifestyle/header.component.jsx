import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Logo,
  CartT
} from "./header.styles";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import LogoImg from "../../assets/images/logo.svg";

const HeaderLifestyle = ({ hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/lifestyle">
      <Logo src={LogoImg} />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        {" "}shop{" "}
      </OptionLink>
      <OptionLink to="/">
        {" "}back to top{" "}
      </OptionLink>
      <CartT as={CartIcon} />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderLifestyle);