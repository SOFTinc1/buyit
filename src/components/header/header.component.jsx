import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  Logoh1,
  CartT
} from "./header.styles";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// import LogoImg from "../../assets/images/emptum.svg";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      {/* <Logo src={LogoImg} /> */}
      <Logoh1>_buyIT</Logoh1>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        {" "}shop{" "}
      </OptionLink>
      <OptionLink to="/contact">
        {" "}about{" "}
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          { currentUser.displayName }
        </OptionDiv>
      ) : (
        <OptionLink className="option" to="/signin">
          sign in
        </OptionLink>
      )}
      <CartT as={CartIcon} />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
