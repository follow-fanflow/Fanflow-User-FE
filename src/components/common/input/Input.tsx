import React, { useState } from "react";
import EyesOpen from "../../../assets/imgs/eyeIcon.svg";
import EyesClose from "../../../assets/imgs/closeIcon.svg";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface InputProps {
  error?: boolean;
  bottomMessage?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  width?: string;
  height?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

//사용방법<Inputplaceholder="문자열" type="password or type" width="300px" height="40px" value={값} onChange={함수} onFocus={포커스함수}/>
export const Input = ({
  error = false,
  bottomMessage,
  label,
  placeholder,
  type,
  width = "100%",
  height = "100%",
  value,
  onChange,
  onFocus,
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showOpen, setShowOpen] = useState<boolean>(false);

  return (
    <Container width={width} height={height}>
      <Label htmlFor={label}>{label}</Label>
      <InputWrap>
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
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const InputWrap = styled.div`
  position: relative;
`;

const LInput = styled.input<{ $password?: string }>`
  border: 1px solid ${({ theme }) => theme.color.gray__1};
  border-radius: 5px;
`;

const Eyes = styled.div`
  position: absolute;
  top: 45%;
  right: 45%;
  transform: translateY(-50%);
  cursor: pointer;
`;
