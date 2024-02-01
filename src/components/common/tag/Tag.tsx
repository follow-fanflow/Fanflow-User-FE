// Tag.tsx

import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface TagProps {
  label: string;
  onDelete: () => void;
}

const Tag: React.FC<TagProps> = ({ label, onDelete }) => {
  return (
    <TagWrapper>
      <Label>{label}</Label>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </TagWrapper>
  );
};

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.color.one};
  color: ${theme.color.white};
  padding: 4px 8px;
  width: fit-content;
  gap: 8px;

  border-radius: 20px;
`;

const Label = styled.div``;

const DeleteButton = styled.button`
  background: none;
  color: inherit;
  cursor: pointer;
`;

export default Tag;
