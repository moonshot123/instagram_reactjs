import { useEffect, useState } from "react";
import styled from "styled-components";
import { shortsList } from "../../api/ShortList.js";
const Shorts = () => {
  const [shorts, setShorts] = useState([]);

  console.log("shorts List 로그입니다. :" + shortsList);
  //console.log("shorts  로그입니다. :" + shorts);

  useEffect(() => {
    setShorts(shortsList);
  }, []);

  return (
    <>
      <ShortDiv>
        {shortsList.map((e, i) => {
          <ShortsItem>
            <ShortsImg src={e.user.profileImage} alt="쇼츠이미지" />;
            <br />
            <ShortsName>쇼츠아이디</ShortsName>
            {console.log(e.user.name)};
            <ShortsImg
              src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg"
              alt="쇼츠이미지"
            />
            <br />
            <ShortsName>쇼츠아이디</ShortsName>
          </ShortsItem>;
        })}
        <ShortsItem>
          <ShortsImg
            src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg"
            alt="쇼츠이미지"
          />
          <br />
          <ShortsName>쇼츠아이디</ShortsName>
        </ShortsItem>
      </ShortDiv>
    </>
  );
};
const ShortDiv = styled.div`
  background-color: white;
  border: 1px solid #d3d3d3;
  height: 110px;
`;
const ShortsImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 15px;
  margin-left: 15px;
`;

const ShortsName = styled.span`
  font-size: 11px;
`;

const ShortsItem = styled.div`
  //border: 1px solid;
  text-align: center;
  float: left;
  width: 80px;
`;

export default Shorts;
