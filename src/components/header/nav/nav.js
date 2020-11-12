import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <a href="https://gokai.shop/">
          Shop
        </a>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
