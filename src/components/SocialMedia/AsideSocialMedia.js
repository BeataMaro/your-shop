import styled from "styled-components";

const AsideSocialMedia = styled.div`
  display: none;
  /* position: fixed; */
  right: 0;
  width: 100px;
  background-color: black;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export default AsideSocialMedia;
