import styled from "styled-components";
import Button from "../button/Button";
import { useState } from "react";
import { theme } from "../../../styles/theme";

interface DeleteModalProps {
  onDelete?: () => void;
  onCancel?: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  onDelete,
  onCancel,
}) => {
  const [isModalVisible, setModalVisible] = useState(true);

  const handleDelete = () => {
    // api 연동 -> 지금은 닫기만 하기
    setModalVisible(false);
    onDelete && onDelete();
  };

  const handleCancel = () => {
    setModalVisible(false);
    onCancel && onCancel();
  };

  return (
    <>
      {isModalVisible && (
        <ModalWrapper>
          <div style={{ fontSize: "20px" }}>
            팬로그를 정말로 삭제하시겠습니까?
          </div>
          <div
            style={{ fontSize: "13px", marginTop: "10px", color: "#FF4444" }}
          >
            삭제 시 되돌릴 수 없습니다
          </div>
          <ButtonWrapper>
            <Button
              width={140}
              height={38}
              backgroundColor="#FFA495"
              content="삭제하기"
              onClick={handleDelete}
            />
            <Button
              width={140}
              height={38}
              backgroundColor="white"
              content="취소"
              borderColor="#FFA495"
              hoverColor="none"
              textColor="#FFA495"
              onClick={handleCancel}
            />
          </ButtonWrapper>
        </ModalWrapper>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  width: 481px;
  height: 201px;
  background-color: ${theme.color.white};
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
  width: 310px;
  margin-top: 30px;
`;
