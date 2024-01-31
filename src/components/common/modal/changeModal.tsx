import styled from "styled-components";
import Button from "../button/Button";
import { Input } from "../input/Input";
import React, { ReactNode, useState } from "react";

// 사용 법: <ChangeModal title="닉네임을 변경하시겠습니까?" onSubmit={() => { 닉네임 변경 로직 구현 }} onCancel={() => { 취소 로직 구현 }} inputPlaceholder="변경할 닉네임을 적어주세요" />

interface ChangeModalProps {
    title: string;
    onSubmit: () => void;
    onCancel: () => void;
    inputPlaceholder: string;
}

export const ChangeModal: React.FC<ChangeModalProps> = ({
    title,
    onSubmit,
    onCancel,
    inputPlaceholder,
}) => {
    const handleFocus = () => {
        console.log("");
    };

    return (
        <>
            <ModalWrapper>
                <div style={{ fontSize: "20px", marginBottom: "30px" }}>{title}</div>
                <Input width="330px" placeholder={inputPlaceholder} onChange={handleFocus} />
                <ButtonWrapper>
                    <Button width={150} height={38} backgroundColor="#FFA495" content="변경하기" onClick={onSubmit} />
                    <Button
                        width={150}
                        height={38}
                        backgroundColor="white"
                        content="취소"
                        borderColor="#FFA495"
                        hoverColor="none"
                        textColor="#FFA495"
                        onClick={onCancel}
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  margin-top: 30px;
`;
