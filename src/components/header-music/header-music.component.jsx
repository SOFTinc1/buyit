import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  // CartT,
  Logo,
} from "./header-music.styles";
import LogoImg from "../../assets/images/logo.svg";

const HeaderMusic = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo src={LogoImg} />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">
        {" "}back to top{" "}
      </OptionLink>
      {/* <OptionLink to="/contact">
        {" "}about{" "}
      </OptionLink>
      <CartT as={CartIcon} /> */}
    </OptionsContainer>
    {/* {hidden ? null : <CartDropdown />} */}
  </HeaderContainer>
);


export default HeaderMusic;
