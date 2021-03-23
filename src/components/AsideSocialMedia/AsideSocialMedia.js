import React from "react";
import styled from "styled-components";

//Social icons
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/feather/Instagram";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { PinterestWithCircle } from "@styled-icons/entypo-social/PinterestWithCircle";

const StyledAsideSocialMedia = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 300px;
    background-color: black;
    position: fixed;
    right: 0;
    top: 55%;
    padding: 1.3rem;
  }
`;

const AsideSocialMedia = () => {
  return (
    <StyledAsideSocialMedia>
      <Facebook size='30' />
      <Instagram size='30' />
      <Twitter size='30' />
      <PinterestWithCircle size='30' />
    </StyledAsideSocialMedia>
  );
};

export default AsideSocialMedia;
