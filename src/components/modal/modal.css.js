import styled from 'styled-components';

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #000;
  border-radius: 22px;
  border: none;
  color: #8dc76b;
  border: 1px solid #8dc76b;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  font-weight: normal;
  padding: 1rem;
  line-height: 4rem;
  position: absolute;
  top: -25px;
  right: -35px;
  color: #fff;
  outline: none;
  cursor: pointer;
`;

export const Dialog = styled.div`
  background: black;
`;
