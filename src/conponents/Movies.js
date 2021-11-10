import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
        <Wrap>
          <img src="https://cnbl-cdn.bamgrid.com/assets/c67d4c933cbe2d3c4f64746f3183345c14b1e09a460d4947b44dcf23760ae715/original" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  transition: all 250ms ease 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
