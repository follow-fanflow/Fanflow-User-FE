import React, { useState } from "react";
import EyesOpen from "../../../assets/imgs/eyeIcon.svg";
import EyesClose from "../../../assets/imgs/closeIcon.svg";
import styled from "styled-components";

interface InputProps {
  error?: boolean;
  bottomMessage?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  width?: string;
  value?: string;
  onChange?: (value: string, name: string) => void;
  onFocus?: () => void;
  Icon?: React.ReactNode;
  name?: string;
}

export const Input = ({
  error = false,
  bottomMessage,
  label,
  placeholder,
  type,
  width = "100%",
  value,
  onChange,
  onFocus,
  Icon,
  name = "",
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showOpen, setShowOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (onChange) {
      onChange(value, name);
    }
  };

  return (
    <Warp>
      <Label htmlFor={label}>{label}</Label>
      <Container style={{ width }}>
        <InputWrap>
          {type === "icon" && <Icons>{Icon}</Icons>}
          <LInput
            id={label}
            type={type === "password" ? (showOpen ? "text" : "password") : type}
            autoComplete="on"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={onFocus}
            $password={type}
          />
          {type === "password" && (
            <Eyes onClick={() => setShowOpen(!showOpen)}>
              {showOpen ? (
                <img src={EyesOpen} alt="Eyes Close" />
              ) : (
                <img src={EyesClose} alt="Eyes Open" />
              )}
            </Eyes>
          )}
        </InputWrap>
      </Container>
      <Message>{bottomMessage}</Message>
    </Warp>
  );
};

const Warp = styled.div``;

const Container = styled.div<{ height?: string; width?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.gray__1};
  border-radius: 4px;
  transition: 100ms all ease-in-out;
  &:focus-within {
    border: 1px solid;
  }
`;

const Label = styled.label`
  font-size: 12px;
`;

const InputWrap = styled.div`
  display: flex;
`;

const LInput = styled.input<{ $password?: string }>`
  padding: 8px;
  width: ${({ width }) => width || "100%"};
  border-radius: 5px;
`;

const Eyes = styled.div`
  cursor: pointer;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  cursor: pointer;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.color.red_1};
`;
