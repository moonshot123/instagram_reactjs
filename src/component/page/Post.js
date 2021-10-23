import styled from "styled-components";
const Post = () => {
  return (
    <>
      <PostDiv>포스트</PostDiv>
    </>
  );
};

const PostDiv = styled.div`
  background-color: white;
  height: 400px;
  width: 100%;
  border: 1px solid #d3d3d3;
  margin-top: 30px;
`;
export default Post;