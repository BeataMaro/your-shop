import React from "react";
import "./styledBreadcrumbs.scss";

export const Breadcrumbs = () => {
  return (
    <div>
      <ul className='breadcrumbs'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>
            <ion-icon name='chevron-back-outline'></ion-icon>
            Jackets
          </a>
        </li>
        <li>
          <a href='#'>
            <ion-icon name='chevron-back-outline'></ion-icon>Sale 50%
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
