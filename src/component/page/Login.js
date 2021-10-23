import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <LoginDiv>
        <Loginform>
          <h2>로그인 페이지</h2>
          <Inputid placeholder="아이디를 입력하세요."></Inputid>
          <Inputpw placeholder="비밀번호를 입력하세요."></Inputpw>
          <Button> 로그인 </Button>
        </Loginform>
      </LoginDiv>
    </>
  );
};
const LoginDiv = styled.form``;
const Loginform = styled.div`
  width: 300px;
  background-color: #eeeff1;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  border: none;
  border: 1px solid #d3d3d3;
`;
const Inputid = styled.input`
  font-size: 14px;
  padding: 10px;
  border: none;
  width: 260px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
`;
const Inputpw = styled.input`
  font-size: 14px;
  padding: 10px;
  border: none;
  width: 260px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
`;
const Button = styled.button`
  font-size: 14px;
  border: none;
  padding: 10px;
  width: 260px;
  background-color: #1bbc9b;

  margin-bottom: 30px;
  color: white;
  :hover {
    background-color: #d3d3d3;
  }
`;
export default Login;
