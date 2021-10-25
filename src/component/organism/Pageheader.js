import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { React, useEffect, useState } from "react";

const PageHeader = () => {
  const [visible, setvisible] = useState(true);
  console.log(useLocation);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("====랜더링 확인====" + pathname);
    if (pathname === "/") {
      setvisible(!visible);
    }
  }, [pathname]);

  return (
    <>
      {visible && (
        <Header>
          <Logo
            src={"https://fontmeme.com/images/instagram-new-logo.png"}
            alt="로고"
          ></Logo>

          <Contents>
            <Contentsimg
              src={"https://cdn-icons-png.flaticon.com/512/660/660026.png"}
              alt="집"
            ></Contentsimg>
            <Contentsimg
              src={"https://cdn-icons-png.flaticon.com/512/2067/2067613.png"}
              alt="비행기"
            ></Contentsimg>
            <Contentsimg
              src={
                "data:image/png;base64,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"
              }
              alt="나침반"
            ></Contentsimg>
            <Contentsimg
              src={
                "https://img.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              }
              alt="하트"
            ></Contentsimg>
            <ContentsimgUser
              src={"https://t1.daumcdn.net/cfile/tistory/9991AB4F5C2D75C017"}
              alt="내사진"
            ></ContentsimgUser>
          </Contents>
        </Header>
      )}
    </>
  );
};
const Header = styled.div`
  height: 70px;
  background-color: white;
  border: 1px solid #d3d3d3;
  vertical-align: middle;

  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const Contents = styled.div`
  height: 20px;
  margin-left: auto;
  display: inline-block;
`;

const Contentsimg = styled.img`
  float: right;
  height: 30px;
  padding-left: 10px;
`;

const ContentsimgUser = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: right;
`;

export default PageHeader;
