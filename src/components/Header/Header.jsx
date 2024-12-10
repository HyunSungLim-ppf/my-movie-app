import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import "./header.css";

const Container = styled.div`
  background: linear-gradient(to right, #e66465, #9198e5);
  height: 10vh;
  display: flex;
  align-items: center;
`;

export const Header = () => {
  return (
    <Container>
      <div className="header_container">
        {/* Logo */}
        <Link to="/" className="logo">Logo</Link>

        {/* GNB */}
        <ul className="gnb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/genres">Genres</Link></li>
        </ul>
      </div>
    </Container>
  );
};
