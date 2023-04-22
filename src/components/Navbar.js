import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function () {
  return (
    <StyledNav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <Link to="/">
        <i className="fas fa-compact-disc navbar-brand"> </i>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/instruments" className="nav-link">
            Instruments
          </Link>
        </li>

        <li className="nav-item ml-5">
          <Link to="/records" className="nav-link">
            Albums
          </Link>
        </li>

        <li className="nav-item ml-5">
          <Link to="/accessories" className="nav-link">
            Accesories
          </Link>
        </li>
      </ul>
      <Link to="/login" className="ml-auto">
      <Button style={{textAlign:'center',marginLeft:'650px'}}>
          Login
        </Button>
      </Link>
      <Link to="/cart" className="ml-auto">
        <Button>
          <span>
            <i className="fas fa-shopping-cart mr-1" />
          </span>
          My Cart
        </Button>
      </Link>
    </StyledNav>
  );
}

const Button = styled.button`
  font-size: 1.5rem;
  text-transform: capitalize;
  background: transparent;
  border:0;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #f2f2f2 ;
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 0.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: #cd873c;
  }

  &:focus {
    outline: none;
  }
`;

const StyledNav = styled.nav`


  .fa-compact-disc {
    font-size: 2.5rem;
  }
  .nav-link {
    color: #f2f2f2  !important;
    font-size: 1.5rem;
    text-transform: capitalize;
    transition: all 0.2s;

    &:hover {
      color: #cd873c !important;
    }
  }
`;
