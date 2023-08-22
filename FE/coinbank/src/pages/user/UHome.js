import React from "react";
import styled from "styled-components";
import { Footer } from "../../component/Footer";

const UHome = () => {
  return (
    <Wrapper>
      <div class="container-fluid text-center p-5 ">
        <h1 class="text-center text-primary text-dark">Welcome to My Bank</h1>
        <img src="../img/b4.jpeg" style={{ width: 600, height: 400 }} />
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .backimg {
    background: url("../img/bank2.jpg");
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export default UHome;
