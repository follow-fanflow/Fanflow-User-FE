import React, { useState } from "react";
import EyesOpen from "../../../assets/imgs/eyeIcon.svg";
import EyesClose from "../../../assets/imgs/closeIcon.svg";
import styled from "styled-components";

//사용법 1) <Input placeholder="s" onChange={handleFocus} />
//사용법 2)<Input type="password" onChange={handleBlur} onFocus={handleFocus} placeholder="qlal" />
//사용법 3)<Input type="icon" placeholder="test" onChange={handleBlur} Icon={<img src={search} or Icon={people} />}/>

interface InputProps {
  error?: boolean;
  bottomMessage?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  width?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  Icon?: React.ReactNode;
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
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showOpen, setShowOpen] = useState<boolean>(false);

  return (
    <Container style={{ width }}>
      <Label htmlFor={label}>{label}</Label>
      <InputWrap>
        {type === "icon" && <Icons>{Icon}</Icons>}
        <LInput
          id={label}
          type={type === "password" ? (showOpen ? "text" : "password") : type}
          autoComplete="on"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          $password={type}
        />
        {type === "password" && (
          <Eyes onClick={() => setShowOpen(!showOpen)}>
            {showOpen ? (
              <img src={EyesClose} alt="Eyes Close" />
            ) : (
              <img src={EyesOpen} alt="Eyes Open" />
            )}
          </Eyes>
        )}
      </InputWrap>
    </Container>
  );
};

const Container = styled.div<{ height?: string; width?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.color.gray__1};
  border-radius: 4px;
  transition: 100ms all ease-in-out;
  &:focus-within {
    border: 2px solid;
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
