import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: auto;
  font-size: 0.8rem;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.darkviolet};
  font-size: 1rem;

  .link {
    color: orangered;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default StyledFooter;
