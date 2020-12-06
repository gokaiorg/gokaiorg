import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #fff;
    transition: color 0.2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: inherit;
    }

    h1 {
      margin-left: 2rem;
    }
  }
`;
