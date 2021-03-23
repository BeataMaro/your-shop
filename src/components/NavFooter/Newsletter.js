import React, { useRef } from "react";
import styled from "styled-components";
import { Envelope } from "@styled-icons/bootstrap/Envelope";

const StyledNewsletter = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  grid-column: 1/-1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.colors.lightgrey};
  }

  & label {
    color: red;
    text-transform: uppercase;
    color: black;
    font-weight: 400;
  }

  & input {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-bottom: 3px solid black;
    padding: 1rem 2rem 1rem;
    color: ${({ theme }) => theme.colors.gold};
    transition: ${({ theme }) => theme.transitions.quick};

    &:focus {
      outline: none;
      border-bottom: 5px solid pink;
    }
  }
  @media (min-width: 992px) {
    grid-column: 3/-1;
  }
`;

const Newsletter = () => {
  const inputRef = useRef(null);
  return (
    <StyledNewsletter>
      <label>
        Newsletter
        <input
          type='text'
          placeholder='Enter Your e-mail'
          ref={inputRef}
          onMouseEnter={() => inputRef.current.focus()}
        />
        <Envelope size='30' />
      </label>
    </StyledNewsletter>
  );
};

export default Newsletter;
