import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoNav>
          <Logo>SEP</Logo>

          <Navigations>
            <CartFav>
              <div>Cart</div>
              <div>Fav</div>
            </CartFav>
            <Navs>
              <Nav>Women</Nav>
              <Nav>Men</Nav>
              <Nav>Both</Nav>
            </Navs>
          </Navigations>
        </LogoNav>

        <SerchSide>
          <div>search</div>
          <div>side</div>
        </SerchSide>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
`;
const Wrapper = styled.div`
  width: 1200px;
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    width: 85%;
  }
`;
const LogoNav = styled.div`
  display: flex;
`;
const Logo = styled.div`
  font-family: poppins;
  /* font-weight: bold; */
  margin-right: 70px;
`;
const Navigations = styled.div`
  display: flex;
`;
const CartFav = styled.div`
  display: flex;
`;
const Navs = styled.div`
  display: flex;
`;
const Nav = styled.div``;
const SerchSide = styled.div`
  display: flex;
`;
