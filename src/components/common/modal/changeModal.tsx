import styled from "styled-components";
import Button from "../button/Button";
import { Input } from "../input/Input";
import { useNavigate } from "react-router";

interface ChangeModalProps {
    onClose: () => void;
    showChangeModal: () => void;
    title: string;
    placeholder: string;
    type?: string;
}

export const ChangeModal: React.FC<ChangeModalProps> = ({ onClose, showChangeModal, title, placeholder, type }) => {
    const handleFocus = () => {
        console.log('');
    }
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert("변경이 완료되었습니다");
        onClose();
        navigate("/profile")
    }

    return (
        <>
            <ModalWrapper>
                <div style={{ fontSize: '20px', marginBottom: '30px' }}>{title}</div>
                <Input width="330px" placeholder={placeholder} onChange={handleFocus} />
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
