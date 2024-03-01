import { Header } from "../components/header";
import styled from "styled-components";
import { SelectTag } from "../components/common/tag/selectTag";
import { Input } from "../components/common/input/Input";
import Button from "../components/common/button/Button";
import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useNavigate } from "react-router";
import axios from "axios";

type TextRadioValueType = {
  title: string;
  content: string;
  price: number;
  count: number;
  exchange_product: string;
  tags: string[];
  shipping_cost: string;
  deal_type: string;
  quality: string;
  changable: string;
  address: string;
  detailAddress: string;
};

interface Props {
  scripturl?: string;
  textRadioValue: TextRadioValueType;
  setTextRadioValue: React.Dispatch<React.SetStateAction<TextRadioValueType>>;
}

export const WriteCafe: React.FC<Props> = ({
  scripturl,
  textRadioValue,
  setTextRadioValue,
}: Props) => {
  const open = useDaumPostcodePopup(scripturl);
  const [addressInputValue, setAddressInputValue] = useState<string>(
    textRadioValue?.address || ""
  );

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    if (setTextRadioValue) {
      setTextRadioValue((prev) => ({ ...prev, address: fullAddress }));
    }
    setAddressInputValue(fullAddress);
  };

  const handleonClickAddressBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    open({ onComplete: handleComplete });
    e.preventDefault();
  };

  const [cafeData, setCafeData] = useState({
    name: "",
    people: "",
    explainLink: "",
    placeX: "",
    placeY: "",
  });

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    name: string
  ) => {
    const inputValue = typeof e === "string" ? e : e.target.value;
    setCafeData({ ...cafeData, [name]: inputValue });
    console.log(cafeData);
  };

  const isLinkValid = () => {
    const linkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return linkRegex.test(cafeData.explainLink);
  };

  const navigate = useNavigate();

  const getAddressCoordinates = async () => {
    if (!addressInputValue) {
      console.error("주소가 입력되지 않았습니다. ");
      return;
    }

    try {
      const response = await axios.get<{ x: string; y: string }>(
        `https://api.geocoding.example.com/?address=${encodeURIComponent(
          addressInputValue
        )}`
      );
      const { x, y } = response.data;
      console.log("x 좌표: ", x);
      console.log("y 좌표: ", y);
      const updatedCafeData = ({ ...cafeData, placeX: x, placeY: y });
      setCafeData(updatedCafeData);
      return updatedCafeData;
    } catch (error) {
      console.error("주소 좌표 변환 중 에러: ", error)
    }
  }

  const handleSubmit = async () => {
    if (!isLinkValid()) {
      alert("링크 형식이 잘못되었습니다");
      return;
    }
  
    try {
      const updatedCafeData = await getAddressCoordinates();
      if (!updatedCafeData) {
        console.error("주소 좌표 변환이 실패했습니다.");
        return;
      }
  
      const { placeX, placeY, ...cafeDataWithoutAddress } = updatedCafeData;
      const response = await axios.post("/api", { placeX, placeY, ...cafeDataWithoutAddress });
      console.log(response.data); // 서버로부터의 응답 데이터 확인
      alert("신청이 완료되었습니다"); // 신청 성공 시 알림
      navigate("/map");
    } catch (error) {
      console.error("신청 중 에러 발생: ", error);
      alert("신청을 처리하는 도중 오류가 발생했습니다"); // 에러 발생 시 알림
    }
  };
  

  return (
    <Wrapper>
      <Header />
      <Box>
        <div style={{ fontSize: "32px", marginBottom: "27px" }}>
          생일카페 위치를 추가해주세요
        </div>
        <ContentWrapper>
          <SelectTag type="member" />
          <InputWrapper>
            <Input
              width="337px"
              height="36px"
              placeholder="주소를 입력해주세요"
              value={addressInputValue}
              onChange={(value) => onChangeInput(value, "address")}
            />
            <Input
              width="337px"
              height="36px"
              placeholder="생일카페 이름을 입력해주세요"
              onChange={(value) => onChangeInput(value, "name")}
            />
            <Input
              width="337px"
              height="36px"
              placeholder="http://idol-official.com"
              onChange={(value) => onChangeInput(value, "explainLink")}
              label="해당 생일카페 링크를 올려주세요"
              bottomMessage={
                !isLinkValid() ? "링크 형식이 잘못되었습니다" : undefined
              }
            />
          </InputWrapper>
          <ButtonWrapper>
            <FindAddressBtn onClick={handleonClickAddressBtn}>
              주소찾기
            </FindAddressBtn>
            <Button
              width={105}
              height={33}
              content="신청하기"
              onClick={handleSubmit}
            />
          </ButtonWrapper>
        </ContentWrapper>
      </Box>
    </Wrapper>
  );
};

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
