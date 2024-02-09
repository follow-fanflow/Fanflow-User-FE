// import { Header } from "../components/header"
// import styled from "styled-components";
// import { SelectTag } from "../components/common/tag/selectTag";
// import { Input } from "../components/common/input/Input";
// import Button from "../components/common/button/Button";
// import { useState } from 'react'
// import { useDaumPostcodePopup } from 'react-daum-postcode';
// import { useNavigate } from "react-router";
// import axios from "axios";

// type TextRadioValueType = {
//     title: string,
//     content: string,
//     price: number,
//     count: number,
//     exchange_product: string,
//     tags: string[],
//     shipping_cost: string,
//     deal_type: string,
//     quality: string,
//     changable: string,
//     address: string,
//     detailAddress: string
// }

// interface Props {
//     scripturl?: string,
//     textRadioValue: TextRadioValueType,
//     setTextRadioValue: React.Dispatch<React.SetStateAction<TextRadioValueType>>
// }

// export const WriteCafe = ({ scripturl, textRadioValue, setTextRadioValue }: Props) => {
//     const open = useDaumPostcodePopup(scripturl);
//     const [addressInputValue, setAddressInputValue] = useState<string>(textRadioValue?.address || '');
//     const [cafeNameInputValue, setCafeNameInputValue] = useState<string>('');
//     const [linkInputValue, setLinkInputValue] = useState<string>('');

//     const handleComplete = (data: any) => {
//         let fullAddress = data.address;
//         let extraAddress = "";

//         if (data.addressType === "R") {
//             if (data.bname !== "") {
//                 extraAddress += data.bname;
//             }
//             if (data.buildingName !== "") {
//                 extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
//             }
//             fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
//         }
//         if (setTextRadioValue) {
//             setTextRadioValue((prev) => ({ ...prev, address: fullAddress }));
//         }
//         setAddressInputValue(fullAddress);
//     };

//     const handleonClickAddressBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
//         open({ onComplete: handleComplete });
//         e.preventDefault();
//     }

//     const handleFocus = () => {
//         console.log('hihi');
//     }

//     const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setLinkInputValue(e.target.value);
//     }

//     const isLinkValid = () => {
//         const linkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
//         return linkRegex.test(linkInputValue);
//     }

//     const navigate = useNavigate();

//     const Submin = () => {
//         if (!isLinkValid()) {
//             alert("링크 형식이 잘못되었습니다");
//             return;
//         }

//         alert("신청이 완료되었습니다");
//         navigate("/map");
//     };

    // api 코드 작성 
    // const Submin = async () => {
    //     if (!isLinkValid()) {
    //         alert("링크 형식이 잘못되었습니다");
    //         return;
    //     }

    //     try {
    //         const response = await axios.post('/api', {
    //             cafeName: cafeNameInputValue,
    //             address: addressInputValue,
    //             cafeLink: linkInputValue,
    //         });
    //         alert('신청이 완료되었습니다');
    //         navigate('/map');
    //     } catch (error) {
    //         console.error('신청 중 에러 발생: ', error);
    //         // alert('신청 중 에러 발생');
    //     }
    // };

//     return (
//         <Wrapper>
//             <Header />
//             <Box>
//                 <div style={{ fontSize: '32px', marginBottom: '27px' }}>생일카페 위치를 추가해주세요</div>
//                 <ContentWrapper>
//                     <SelectTag />
//                     <InputWrapper>
//                         <Input
//                             width="337px"
//                             height="36px"
//                             placeholder="주소를 입력해주세요"
//                             value={addressInputValue}
//                             onChange={(e) => setAddressInputValue(e.target.value)}
//                         />
//                         <Input
//                             width="337px"
//                             height="36px"
//                             placeholder="생일카페 이름을 입력해주세요"
//                             onChange={handleFocus}
//                         />
//                         <Input
//                             width="337px"
//                             height="36px"
//                             placeholder="http://idol-official.com"
//                             onChange={handleLinkChange}
//                             label="해당 생일카페 링크를 올려주세요"
//                             bottomMessage={!isLinkValid() ? "링크 형식이 잘못되었습니다" : undefined}
//                         />
//                     </InputWrapper>
//                     <ButtonWrapper>
//                         <FindAddressBtn onClick={handleonClickAddressBtn}>주소찾기</FindAddressBtn>
//                         <Button width={105} height={33} content="신청하기" onClick={Submin} />
//                     </ButtonWrapper>
//                 </ContentWrapper>
//             </Box>
//         </Wrapper>
//     )
// }

// const Wrapper = styled.div`
//     display: flex;
//     margin-top: 75px;
//     height: 91vh;
//     justify-content: center;
//     align-items: center;
// `;

// const Box = styled.div`
//     width: 737px;
//     height: 359px;
//     border: 1px solid ${({ theme }) => theme.color.gray__1};
//     border-radius: 20px;
//     padding: 64px 64px 100px 100px;
// `;

// const ContentWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
// `;

// const InputWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 200px;
//     padding: 0 36px;
// `;

// const ButtonWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 330px;
// `;

// const FindAddressBtn = styled.button`
//     width: 105px;
//     height: 36px;
//     border-radius: 7px;
//     cursor: pointer;
//     font-size: 12px;
//     transition: 0.2s;
//     &:hover {
//         background-color: ${({ theme }) => theme.color.gray_1};
//     }
// `;

export const WriteCafe = () => {
    
}