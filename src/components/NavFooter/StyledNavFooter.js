import styled from "styled-components";

const StyledNavFooter = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightgrey};
`;

export default StyledNavFooter;
