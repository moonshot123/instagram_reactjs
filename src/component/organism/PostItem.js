import { useEffect, useState } from "react";
import styled from "styled-components";
import { postList } from "./PostList";
const PostItem = () => {
  //const [List, setList] = useState({ postList });

  // useEffect(() => {
  //   setList({ postList });
  // }, []);

  return (
    <>
      <Contents>
        <Top>
          <UserContainer>
            <ProfileImg src="imgs/img_section/img01.jpg" alt="프로필 이미지" />
            <UserName></UserName>
          </UserContainer>
          <MoreIcon></MoreIcon>
        </Top>

        <ImgSection src="imgs/img_section/img01.jpg" alt="visual01" />

        <BottomIcons>
          <LeftIcons>
            <HeartBtn></HeartBtn>
            <BubbleIcon></BubbleIcon>
            <ShareIcon></ShareIcon>
          </LeftIcons>
          <div class="right_icon">
            <Bookmark></Bookmark>
          </div>
        </BottomIcons>

        <Likes>
          좋아요
          <Count>2,346</Count>개
        </Likes>

        <CommentContainer>
          <Comment>
            <NickName>아이디입니다.</NickName>
            <div>댓글 입니다.</div>
          </Comment>
          <SmallHeart>
            <div></div>
          </SmallHeart>
        </CommentContainer>

        <Timer>작성시간입니다.</Timer>

        <CommentAdd>
          <input type="text" placeholder="댓글달기..." />
          <UploadBtn>게시</UploadBtn>
        </CommentAdd>
      </Contents>
    </>
  );
};

const Contents = styled.div``;
const Top = styled.div``;
const UserContainer = styled.div``;
const ProfileImg = styled.img``;
const UserName = styled.div``;
const MoreIcon = styled.div``;

const ImgSection = styled.img``;
const BottomIcons = styled.div``;

const LeftIcons = styled.div``;
const HeartBtn = styled.div``;
const BubbleIcon = styled.div``;
const ShareIcon = styled.div``;
const Bookmark = styled.div``;

const Likes = styled.div``;
const Count = styled.span``;

const CommentContainer = styled.div``;
const Comment = styled.div``;
const NickName = styled.div``;
const SmallHeart = styled.div``;
const Timer = styled.div``;

const CommentAdd = styled.div``;
const UploadBtn = styled.div``;
export default PostItem;
