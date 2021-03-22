import React from "react";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";
import styled from "styled-components";

const StyledBreadcrumbs = styled.ul`
  display: flex;
  padding: 2rem;
  border-top: 0.03px solid ${({ theme }) => theme.colors.greyblue};

  & li a {
    color: ${({ theme }) => theme.colors.lightgrey};
    margin-right: 0.5rem;
    transition: all 0.4s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.lightgrey};
    }
  }
`;

const Breadcrumbs = ({ theme }) => {
  return (
    <StyledBreadcrumbs>
      <li>
        <a href='#'>Home</a>
      </li>
      <li>
        <a href='#'>
          <ChevronLeft size='20' />
          Jackets
        </a>
      </li>
      <li>
        <a href='#'>
          <ChevronLeft size='20' />
          Sale 50%
        </a>
      </li>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
