import { styled } from "styled-components";
import logo from "../assets/imgs/logo1.svg";
import { Input } from "../components/common/input/Input";
import Img from "../assets/imgs/homeLast.svg";
import person from "../assets/imgs/PersonIcon.svg";
import Button from "../components/common/button/Button";
import { useState } from "react";

export function SignUp() {
  const [changePassword, setChangePassword] = useState({
    password: "",
    newPassword: "",
    rePassword: "",
  });

  function handlePasswordChange(e: any, field: any) {
    setChangePassword((prev) => ({ ...prev, [field]: e.target.value }));
  }
  function handleBlur() {}
  return (
    <Warp>
      <Sign>
        <SignWarp>
          <Elements>
            <Top>
              <img src={logo} alt="" width={"50px"} />
              <Tw>
                <Text>회원가입</Text>
                <Error>※아이디가 중복되었습니다</Error>
              </Tw>
            </Top>
            <InputWarp>
              <Input
                type="icon"
                placeholder="닉네임"
                onChange={handleBlur}
                Icon={<img src={person} />}
              />
              <Input
                type="icon"
                placeholder="아이디"
                onChange={handleBlur}
                Icon={<img src={person} />}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={(e) => handlePasswordChange(e, "newPassword")}
              />
              <Input
                type="password"
                placeholder="비밀번호 확인"
                onChange={(e) => handlePasswordChange(e, "rePassword")}
                bottomMessage={
                  changePassword.newPassword !== changePassword.rePassword
                    ? "※비밀번호가 일치하지 않습니다"
                    : undefined
                }
              />
            </InputWarp>
          </Elements>
          <Button content="회원가입" width={105} height={33} />
        </SignWarp>
      </Sign>
      <ImgWarp>
        <img src={Img} alt="" />
      </ImgWarp>
    </Warp>
  );
}

const Sign = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tw = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Error = styled.p`
  color: ${({ theme }) => theme.color.red_1};
  font-size: 10px;
`;

const Warp = styled.div`
  height: 100vh;
  display: flex;
`;

const SignWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.gray__1};
  border-radius: 10px;
  padding: 50px 65px;
  width: 448px;
  box-sizing: border-box;
  gap: 10px;
`;

const ImgWarp = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 50%;
  background-color: #ffdede;
`;

const Text = styled.p`
  font-size: 28px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const InputWarp = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Elements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 82px;
`;
