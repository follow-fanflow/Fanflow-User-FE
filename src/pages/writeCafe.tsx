import { Header } from "../components/header"
import styled from "styled-components";
import { SelectTag } from "../components/common/tag/selectTag";
import { Input } from "../components/common/input/Input";
import Button from "../components/common/button/Button";
import react, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';


export const WriteCafe: React.FC = () => {
    const [isAddressModalOpen, setAddressModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<string>('');

    const handleFocus = () => {
        console.log('hihi');
    }

    const handleFindAddressClick = () => {
        setAddressModalOpen(true);
    }

    const handleAddressSelect = (data: any) => {
        setSelectedAddress(data.address);
        setAddressModalOpen(false);
    }

    return (
        <Wrapper>
            <Header />
            <Box>
                <div style={{ fontSize: '32px', marginBottom: '27px' }}>생일카페 위치를 추가해주세요</div>
                <ContentWrapper>
                    <SelectTag />
                    <InputWrapper>
                        <Input
                            width="337px"
                            height="36px"
                            placeholder="주소를 입력해주세요"
                            onChange={handleFocus}
                        />
                        <Input
                            width="337px"
                            height="36px"
                            placeholder="생일카페 이름을 입력해주세요"
                            onChange={handleFocus}
                        />
                        <Input
                            width="337px"
                            height="36px"
                            placeholder="http://ab6ix-official.com"
                            onChange={handleFocus}
                            label="해당 생일카페 링크를 올려주세요"
                            bottomMessage="링크 형식이 잘못되었습니다"
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                        <FindAddressBtn onClick={handleFindAddressClick}>주소찾기</FindAddressBtn>
                        <Button width={105} height={33} content="신청하기" to="/map" />
                    </ButtonWrapper>
                    {isAddressModalOpen && (
                        <DaumPostcode
                            onComplete={handleAddressSelect}
                            autoClose
                            animation
                        />
                    )}
                </ContentWrapper>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-top: 75px;
    height: 91vh;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    width: 737px;
    height: 359px;
    border: 1px solid ${({ theme }) => theme.color.gray__1};
    border-radius: 20px;
    padding: 64px 64px 100px 100px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    padding: 0 36px;
`;


const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 330px;
`;

const FindAddressBtn = styled.button`
    width: 105px;
    height: 36px;
    border-radius: 7px;
    cursor: pointer;
    font-size: 12px;
    transition: 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.color.gray_1};
    }
`;