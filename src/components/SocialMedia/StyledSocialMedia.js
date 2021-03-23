import styled from "styled-components";

const StyledSocialMedia = styled.div`
  background-color: ${(props) => (props.footer ? "black" : "pink")};
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1/-1;
  & svg {
    color: ${({ theme }) => theme.colors.lightgrey};
    transition: ${({ theme }) => theme.transitions.quick};
    &:hover {
      color: violet;
    }
  }
  @media (min-width: 992px) {
    grid-column: 1/3;
  }
`;

export default StyledSocialMedia;
