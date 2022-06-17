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

const Container = styled.div``;
const Wrapper = styled.div``;
const LogoNav = styled.div``;
const Logo = styled.div``;
const Navigations = styled.div``;
const CartFav = styled.div``;
const Navs = styled.div``;
const Nav = styled.div``;
const SerchSide = styled.div``;
