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
        <a href="https://app.zerion.io/0x41646fb881acd56bad144b343a3525b6907bc86b/overview" target="_blank">
          Fund
        </a>
      </li>
      <li>
        <a href="https://snapshot.page/#/gokai.eth" target="_blank">
          Vote
        </a>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
