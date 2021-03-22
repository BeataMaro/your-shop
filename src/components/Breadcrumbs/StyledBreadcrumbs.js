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

export default StyledBreadcrumbs;
