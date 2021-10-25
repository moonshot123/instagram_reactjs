import styled from "styled-components";
import PostItem from "../organism/PostItem";
const Post = () => {
  return (
    <>
      <PostDiv>
        <PostItem />
      </PostDiv>
    </>
  );
};

const PostDiv = styled.div`
  background-color: white;
  height: 700px;
  width: 100%;
  border: 1px solid #d3d3d3;
  margin-top: 30px;
`;
export default Post;
