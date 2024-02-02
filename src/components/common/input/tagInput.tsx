import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

interface TagInputProps {
  onEnter: (value: string) => void;
  onEnterPress: () => void;
  placeholder?: string;
  tags: string[];
}

export const TagInput = ({
  onEnter,
  onEnterPress,
  placeholder,
  tags,
}: TagInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigateTo = useNavigate();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tags.length === 0) {
      const trimmedValue = inputValue.trim();

      if (trimmedValue) {
        onEnter(trimmedValue);
        // onEnterPress();
        setInputValue("");
        // navigateTo('/map/show')
      }
    }
  };

  return (
    <StyledInput
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyUp={handleKeyUp}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  width: 409px;
  flex: 1;
  border: none;
  height: 40px;
  font-size: 15px;
  padding: 0 10px 0 10px;
  border: 1px solid ${({ theme }) => theme.color.gray__1};
  border-radius: 5px;
  :focus {
    outline: transparent;
  }
`;
