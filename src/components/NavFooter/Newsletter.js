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
    margin-right: 0.8em;
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
  & button {
    padding: 0.5em 0.8em 0.5em;
    outline: none;
    border: 1px solid transparent;
    background-color: black;
    color: ${({ theme }) => theme.colors.white};
    margin: 1em;
    transition: ${({ theme }) => theme.transitions.quick};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.greyblue};
      color: black;
      border: 1px solid black;
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
      <Envelope size='30' />
      <label>
        Newsletter
        <input
          type='text'
          placeholder='Enter Your e-mail'
          ref={inputRef}
          onMouseEnter={() => inputRef.current.focus()}
        />
      </label>
      <button type='submit' onClick={(e) => e.preventDefault()}>
        Subscribe
      </button>
    </StyledNewsletter>
  );
};

export default Newsletter;
