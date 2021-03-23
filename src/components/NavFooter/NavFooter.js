import React from "react";
import StyledNavFooter from "./StyledNavFooter";
import Newsletter from "./Newsletter";
import { SocialMedia } from "../SocialMedia";

const NavFooter = () => {
  return (
    <>
      <StyledNavFooter>
        <SocialMedia />
        <Newsletter />
      </StyledNavFooter>
    </>
  );
};

export default NavFooter;
