import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

function Home() {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden; //把超出螢幕左右的畫面去除。

  &:before {
    // background注意位置與大小間的參數間要加'/'
    // https://ithelp.ithome.com.tw/articles/10250499
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
