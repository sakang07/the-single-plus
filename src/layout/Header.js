import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/Container';
import Logo from '../image/logo.png';
import Search from '../image/search-solid.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 6.25rem;
  background-color: #333;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5625rem;
    text-transform: capitalize;
  }

  h1 {
    width: 11.25rem;
    height: 3.125rem;
    background-image: url(${Logo});
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  h1 a {
    display: block;
    width: 100%;
    height: 100%;
  }

  nav.gnb {
    /* margin-left: 5.5rem; */
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 1.125rem;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav.gnb li {
    margin-left: 2.5rem;
  }

  nav.gnb li:first-child {
    margin-left: 0;
  }

  nav.unb {
    text-transform: capitalize;
    color: #fff;
    font-size: 1.125rem;
  }

  nav.unb li:first-child {
    position: relative;
    margin-right: 56px;
  }

  nav.unb li:first-child::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: -1.75rem;
    bottom: 0;
    width: 0.0625rem;
    height: 1.125rem;
    background-color: #fff;
  }
  .search {
    width: 30px;
    height: 30px;
    margin-left: 2.375rem;
    background-image: url(${Search});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .search button {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <h1>
          <Link to='/'>
            <span className='blind'>single plus</span>
          </Link>
        </h1>
        <nav className='gnb'>
          <h2 className='blind'>global navigation</h2>
          <ul>
            <li>
              <Link to='/showcase'>showcase</Link>
            </li>
            <li>
              <Link to='/lifestyle'>lifestyle</Link>
            </li>
            <li>
              <Link to='/single-edit'>single edit</Link>
            </li>
          </ul>
        </nav>
        <nav className='unb'>
          <h2 className='blind'>utility navigation</h2>
          <ul>
            <li>
              <Link to='/login'>login</Link>
            </li>
            <li>
              <Link to='/join'>join</Link>
            </li>
            <li className='search'>
              <button type='button'>
                <span className='blind'>search</span>
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
