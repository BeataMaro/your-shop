import React from "react";
import "./Breadcrumbs.scss";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";

export const Breadcrumbs = () => {
  return (
    <div>
      <ul className='breadcrumbs'>
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
      </ul>
    </div>
  );
};

export default Breadcrumbs;
