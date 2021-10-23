import styled from "styled-components";
import Shorts from "../organism/Short";
import Post from "./Post.js";
const Main = () => {
  return (
    <MainDiv>
      <Shorts></Shorts>
      <Post></Post>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
`;

export default Main;
