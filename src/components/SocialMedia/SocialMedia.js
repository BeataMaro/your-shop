import React from "react";
import StyledSocialMedia from "./StyledSocialMedia";

//Social icons
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/feather/Instagram";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { PinterestWithCircle } from "@styled-icons/entypo-social/PinterestWithCircle";

const SocialMedia = ({ footer }) => {
  return (
    <StyledSocialMedia footer={footer}>
      <Facebook size='30' className='socialIcon' />
      <Instagram size='30' />
      <Twitter size='30' />
      <PinterestWithCircle size='30' />
    </StyledSocialMedia>
  );
};

export default SocialMedia;
