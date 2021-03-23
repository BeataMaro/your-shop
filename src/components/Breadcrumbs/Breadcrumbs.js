import React from "react";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";
import StyledBreadcrumbs from "./StyledBreadcrumbs";

const Breadcrumbs = () => {
  return (
    <StyledBreadcrumbs>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/products'>
          <ChevronLeft size='20' />
          Jackets
        </a>
      </li>
      <li>
        <a href='/products'>
          <ChevronLeft size='20' />
          Sale 50%
        </a>
      </li>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
