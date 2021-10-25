import styled from "styled-components";

const PostItem = () => {
  return (
    <>
      <Contents>
        <Top>
          <UserContainer>
            <ProfileImg
              src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg"
              alt="프로필 이미지"
            />
            <UserName>아이디1</UserName>
          </UserContainer>
          <MoreIcon>...</MoreIcon>
        </Top>

        <ImgSection
          src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg"
          alt="visual01"
        />

        <BottomIcons>
          <LeftIcons>
            <HeartBtn
              src="https://img.icons8.com/ios/500/hearts--v1.png"
              alt="하트"
            ></HeartBtn>
            <BubbleIcon
              src="data:image/png;base64,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"
              alt="말풍선"
            ></BubbleIcon>
            <ShareIcon
              src="https://cdn-icons-png.flaticon.com/512/2067/2067613.png"
              alt="비행기"
            ></ShareIcon>
          </LeftIcons>

          <Bookmark src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxAhGCE099HIRVJp83IYqYslOm1zeivEUrHwCzCZIJ85xnI0IkP7bw1kL6BP1JiMxvic&usqp=CAU"></Bookmark>
        </BottomIcons>
        <br />
        <br />
        <Likes>
          좋아요
          <Count>2,346</Count>개
        </Likes>

        <CommentContainer>
          <Comment>
            <NickName>아이디입니다.</NickName>
            <AddText>댓글 ㅁㄴ어ㅣㅁㄴ어 입니다.</AddText>
          </Comment>
          <SmallHeart
            src="https://img.icons8.com/ios/500/hearts--v1.png"
            alt="하트"
          ></SmallHeart>
        </CommentContainer>
        <br />
        <br />
        <Timer></Timer>

        <CommentAdd>
          <FaceIcon
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD5+fnw8PD8/Pz09PSenp5ZWVmbm5vIyMjb29vY2Nhubm7Ly8uoqKi3t7d4eHjq6uorKytnZ2eurq5UVFTh4eGHh4fT09NBQUGpqanBwcF0dHQ6OjocHBwODg5/f3+Li4tOTk4nJyczMzMYGBiUlJRhYWE8PDxHR0cgICDqj6H/AAAM2UlEQVR4nOVd62KiOhBWEBRvXFVaq6C1td33f8BT9HS1zEzIJAFS9/u5W0MCyVy/mQwGLWPkuHm49Mv0uEv2RTEcDotin+yOaekvw9x1Rm1PoE3E0/CQ7oZi7NJNNov7nqoC8mz+WTQs7g5P8yzve8oMzPyV/Nru8OnP+p66BNxwrrS6b8wzt+8liLB+Hmst74rxct33QnB4mdrexHDMvL6XA7DQ25wQ6aLvJd3D9RPD66vwOrHlSE7LFpZ3RTTte3FfmJkQLjRWfavJxVOr66vwGfS4vtyc9BTh2JfQmba7P+8x7sPYcV86W1+FqGsFOfI7XV8Fv1M/KzjxZve6mkebSRZug3yWB9swm2yi+eqVN8ipu+PoMeyXU7kMYs9Bx3G8OFiWjJcV4eMYx1ZyPkkUypnQ61B6mduW11bBS2VmsisDnt8eB6WUap23bskFf5pnsVqulaTCeimhf/YtGwCHxhk8LXXespt9Nj7hYGw1EHHTcUne9WNK8aTpKbvWPOQmEXMODKmsRdNZb0ngTMRP3Zh8s/FB/LB3g8/6hiOUAsXEtKpyJsJg5Ni4hROLvPg3vw1VPFq+CZ6ZGFYbs71oy7RlFXuig7E36m+IZEyrVr8nipAYlDcZ/ZRV27HNtcDLzkw9ZEk+4i009QwBtvQJWZp5An0YXrpxS72InMHExPgHavR9d/5aTkpVAyYcucB5pz43GTPRXiK5Rbs4gfcIqYloblRKyDx1n7WNKf9RS9xQaiIyNW0WKIGjoTQC80Nqgdqpyqp/ho9X9JeLnhHWuOKMXFzTJn0SJ1zcO94rzWmEexPm3RYecCcuUXFu8KFejE+ZC1zejPkDvaMDlabnqwDc3WB7/bi/tGljxmwc0LkxBWps5j21BHx/8aQNKrLs+IIV0K+40x6hH0MGB3oWGUY4asvYtEDC15AO+LtYbkJBHLcKTJn9kY2/YRHnxDamK2qQzOV+iymKwj6Oq4vZqFIqw8N2uI3ET9QxkIkcYSnsvtwlMTDvVWKfYnLULjF6A2aiNsrTEaLrn7qYrRKQwMapSSRikSf7pMw3MOPSF//ERX7SdVSNAyyuIVaKiKkgqWN6AiIXhS4sIoD3Xc1VEUg0XKTaEFPIKro1ggWcssDARP7aVkVxA6Iy6K9yhHvUvqqAOjy4T1fU3yKfsAsemS4QeUp9RKg/yZdhFWCW+BP/wxy+C0vLc2pYw4njDH/4KspOJ6oOKGzQzYfoQvvFzBWIw4eVosAXYSRJ3gmgNV3CP4IW6Rv3Ewb+/Jy+b5W/fBxu0nP0rFAlg2gMaJ3C19BgpNend9sDZ6VKnu3Nb+OT5GDpAJw9COwUrNjTzxfEp6GsfzBnC64eHoGgzan+J1Dbc07hqG7Q/mH6lCD6xaVYwC1Y1/owgsjZKYivzVoiEt4rOb8fDBwwQM3rg/KWk6TAglcnxhuaIr8fPjMm8IVNwyeCYSuGOYNn4hj7DGev8zY6NGx+BgiBV5HKj40Fr1gzJCgWTMcNnLMfdg18AYyqBop8Kr3PKW4+jwUMw6D32xBQnxLG0GQVlOTvEcP5Ct5JhImM+9+D6AUn20tNUPYok/xcxkmpADLDd9EMaLExTjma57hAUm2TROc33gph8PS2zcFR50S5UVF/gWSg9UwOwFsh1Mq3CYCTxDkBBDdsKJ3PoQs5eAscPNd/f4ucgqE5UgynbVSQ3KV0vSZvgchh+/4f8BVYGe0ROUHJUCtZUkxEW2iA3fAdGwaP4HFSYQyS9wmQEN8VbPoOUHrfLhSYIi8ARX2Ds+wA1ArZiWegWb/Nmvq/f/BYCdRBlDaLDvjv2Zt0MAJtt67/DqKIJXNgfIZH6d9jKT3OG7oBqNZrtAHYFNyhHZSJymi8glo1Klk9YJteFRaQ1uycL6b0WeQGJG3J8S//AhyY62uqmwIcq/t/QHHIC2NBu+ZVrbywvpsuZxmsu1QYef3xcwx2RqdmNp8VSzbrQd8L0wlsMaW8/ei+qLVU+AD3vYp2yikvYGFX0gAcc8V0jBe+XOKyZ9WC/On7JZpx2miknYFGrMQBCOGoj28B6oupAg31+AYIpf4q1CMiKRJHKvuepBbqOn+HhFINVZ72BGAkO9Bk6rN5mD5A4M+FVqm9LDYZAO2eQw3yWxK/OEBcLARe42tHvZhaglNvr7UER/N3EExo1PkWPhCvdlMRm1H3lDZA4dtPZBOjbnunIEhjT3GTGupG6GpQD238HooJjnq6+wP4jHYWHsij7iolg3o5s82sbhnU9fufQZ2m8Rv4liLUzbYCrPB3m6Uw3FYAl7HvzsS6AHY2WKGNNVwcgDTTP/ANH/8cPr4sfXx9+Pg2zePbpY/vWzy+f/j4Pv7jx2kePdb2/A/ESx895j17+LyFZ3fuid9QBck9AR5RaXyeigiiz+Qp2vJWieQPbc0B/y0T+mD55EgO2NI8/j1DhCMZ6oupjFBTXAyj+FluJz8jlIthhk9jGIcfM5K3s1A+TVz38i2wvet6W/ooopwoUHWkwGurMPPNffy6RJRmC6O8NgPcRG82qSSysSYhICIo23GT4Cbq8UudfHL+7u9mKIoFS8VkXTqCX6rBEc794/0pVtzfdUC2qaxoIDjCyjxvWFVnpDkm0tlSssKF4nkrc/URCruBiDlGiZaUDCRXX7neAtbzvGp7l9gCZaNjZL2Fcs0MUlup2/kMbQIvS1gla2bU654Qkr5er2hYrzyU54zTdU/qtWvYlhqrb1QXLWOTdnbA97+pUfX6Q+wKQ+WW5gF+i4W09Pqo//JmZKnXkOJVzkrmG3Upn3SaQVRDqlEHjBeApuzP6FD3TMj7FaI6YFh9KW2dUGVdvDugRkvqxs5CehxxLbdGPT55kdBBuijBPdCXc8mHMMT1+Do9Fegy3jSQiJ+7oejaZMaJFvdU0OmL4QlutSxehFeRurOJ+NZKRmSzqS+GTm8Tulz9gl26DOAy40VYHkWXuVXgZGubepto9aeRuVy2OI3nm/eJP3nfvJyfRJfiqS2wsT+NXo8h8qYiLbCC7809hvT6RAmunlMGK2Ag0SdKqlsWDfNfkVFkKzl7zX5tSNNFHYx5eVqpfm1IixEW8SQGEQQNMGts5XruYUKfZXk5ousmWfjg7VC03B0dAtoWzOi37JXkDeB+QKzlIx6l0O9f6tBXMUrjhV9ji7RhIsxZAz1oZyIjUwKpCoFXugct1mSE78sGUpfA4zgrEZQZfYSRPizsDp9fWEjcAY/hoBb94PSCNtbPe/3edD06wDlUjdEhHScE5e7GerI7i5Ly2hHMM3USD68nO6YTmS3FbhitfRmx8/S+0OKZIW6KUJ0i4l6LrLgON8cEv5axSI5lqJ3nQNpolcIfYO3ltFO78TQP/UM0T9Pz+Zym8+jgh/nUCLsMs/gbhCMWWLKX6YZF+prcyl9/z8yuUSZjvcUsYGegwIxECdmP/czOEgUssiDzMdAeejbWe6ENG6Xshl9y7xpgOlXQaNX4UHfn4VFs2zj86P2H0n4Ceodl/zcB3wO9w5JhQx+w39ukM3TvIR2Aeq8L7CmJQr8A6y7Zf+A+4Me/0xm/JtCOs4jHZRXqJm29Wx2VovINb++AqtQvvdiv6gd3hVyRKMUJXDxF+9qnARfjr32v2KqR6kXenxk+wwMi6jNCbZthf84UlYjVYF9TQ/YjUqmsiNYLp/hAT90fxphKF2gW25Et4buurCHz6NoNBA7UyPNO1QauBYf8i6EQkEt86+4S1pwk4BhYIGW/VeBfPqYEj068GupxAbiZt8/YxWkMaQaVsYpeASHo2Ha14lqQ3jGolynVXyFStJik4IoIHkarzmcCiiWTD8yAR4uAL1vUsPHo4ibvFYXfRquJkS+iMCbGt86IvrSoWuPE9Hd0JoSVfYVe4QoB0Zb5wsakzIkP4oe11AlJJG8qnANDL3ZBlF78RWsNyRrZeYkiY+THQxqJHLs2zf5Dw8OHw5Pq1QgXuM/NhCMjhhqNhUht/I/Vcq2yXUfrpQTXaN967xWPvkTsDrso4G2lOChBYRaGeZv2xTdkSZZJJCy2uGEdliJte4+Oeh46Up/xilPpb2MPNwgcL976JYMgFnXnki6YlOfX1TzaTLJwG+SzPNiG2WQTzVcMXtjlZXXnjw4qi4o3OwNYdh2Kdg3wgRmI+mhBNlXkkSpgzOW2m8JCk/MsiVWnB7C+RvzCaZP47HN9FWbt7tWVDZ2bp8ZKSQCivs5fHe6SzeuWwGnShYUmjQXDzpFC2vfxg3Ayc5L1mFnaY3SdmRA742cbOsaRcEMyhyKFl9Cqw0dgJlWGAHH0baSxUsiz+acwHPgTT/PMBsXHRTwND2mTn7VLN9nMPn4uB46Xh0t/k64+kn1Rfdai2Ccfq3TjL8Oc8I1N4j/M3ag9vVNzuQAAAABJRU5ErkJggg=="
            alt="얼굴아이콘"
          />
          <CommentInput type="text" placeholder="댓글달기..." />
          <UploadBtn>게시</UploadBtn>
        </CommentAdd>
      </Contents>
    </>
  );
};

const Contents = styled.div``;
const Top = styled.div`
  display: inline-block;
  height: 70px;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  padding: 10px;
`;
const UserName = styled.div`
  color: #262626;
`;
const MoreIcon = styled.div`
  float: right;
`;

const ImgSection = styled.img`
  width: 100%;
`;
const BottomIcons = styled.div``;

const LeftIcons = styled.div`
  //width: 100%;
  //display: inline-block;
  float: left;
  height: 30px;
  padding-left: 10px;
`;
const HeartBtn = styled.img`
  float: left;
  height: 35px;
  padding-top: 10px;
`;
const BubbleIcon = styled.img`
  float: left;
  height: 28px;
  padding-left: 10px;
  padding-top: 10px;
`;
const ShareIcon = styled.img`
  float: left;
  height: 30px;
  padding-left: 10px;
  padding-top: 10px;
`;
const Bookmark = styled.img`
  float: right;
  height: 30px;
  padding-right: 10px;
  padding-top: 10px;
`;

const Likes = styled.div`
  font-weight: bolder;
  padding-left: 10px;
  padding-top: 10px;
`;
const Count = styled.span``;

const CommentContainer = styled.div``;
const Comment = styled.div``;
const NickName = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  float: left;
  font-weight: bolder;
`;
const AddText = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  float: left;
  width: 300px;
`;

const SmallHeart = styled.img`
  padding-right: 20px;
  float: right;
  height: 10px;
  padding-top: 10px;
`;
const Timer = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 8px;
  font-display: #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

const FaceIcon = styled.img`
  float: left;
  height: 40px;
  padding: 5px;
  padding-left: 10px;
`;

const CommentAdd = styled.div`
  //border-top: 1px solid #d3d3d3;
`;

const CommentInput = styled.input`
  float: left;
  height: 40px;
  width: 420px;
  border: none;
  padding-top: 5px;
`;

const UploadBtn = styled.div`
  float: right;
  padding-top: 20px;
  padding-right: 20px;
`;
export default PostItem;
