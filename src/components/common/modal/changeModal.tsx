import styled from "styled-components";
import Button from "../button/Button";
import { Input } from "../input/Input";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios, { AxiosHeaders } from "axios";

interface ChangeModalProps {
    onClose: () => void;
    showChangeModal: () => void;
    title: string;
    placeholder: string;
    type?: string;
}

export const ChangeModal: React.FC<ChangeModalProps> = ({ onClose, showChangeModal, title, placeholder, type }) => {
    const [nicknameData, setNicknameData] = useState({
        nickname: "",
    });
    const [passwordData, setPasswordData] = useState({
        password: "",
    });

    const handleFocus = () => {
        console.log('');
    }

    const navigate = useNavigate();

    const onChangeInput = (
        e: React.ChangeEvent<HTMLInputElement> | string,
        name: string
    ) => {
        const inputValue = typeof e === "string" ? e : e.target.value;
        if (type === "nickname") {
            setNicknameData({ ...nicknameData, [name]: inputValue });
            console.log(nicknameData);
        } else if (type === "password") {
            setPasswordData({ ...passwordData, [name]: inputValue });
            console.log(passwordData);
        }
    }

    const handleSubmit = () => {
        if (type === 'nickname') {
            axios
                .patch("베이스url/user/nickname/{id}", { ...nicknameData })
                .then(() => {
                    alert("닉네임 변경이 완료되었습니다");
                    console.log({ ...nicknameData });
                })
                .catch((err) => {
                    console.log(err);
                })
        } else if (type === 'password') {
            axios 
                .patch("베이스url/user/password/{id}", { ...passwordData })
                .then(() => {
                    alert("비밀번호 변경이 완료되었습니다");
                    console.log({...passwordData})
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        onClose();
        navigate("/profile")
    }

    return (
        <>
            <ModalWrapper>
                <div style={{ fontSize: '20px', marginBottom: '30px' }}>{title}</div>
                <Input
                    width="330px"
                    placeholder={placeholder}
                    onChange={(value) => onChangeInput(value, "value")} 
                />
                <ButtonWrapper>
                    <Button
                        width={150}
                        height={38}
                        backgroundColor="#FFA495"
                        content="변경하기"
                        onClick={handleSubmit}
                    />
                    <Button
                        width={150}
                        height={38}
                        backgroundColor="white"
                        content="취소"
                        borderColor="#FFA495"
                        hoverColor="none"
                        textColor="#FFA495"
                        onClick={onClose}
                    />
                </ButtonWrapper>
            </ModalWrapper>
        </>
    );
};

const ModalWrapper = styled.div`
  width: 501px;
  height: 241px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.gray_1};
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  margin-top: 30px;
`;
