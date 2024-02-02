import { useState } from "react";
import styled from "styled-components";
import Close from "../../../assets/imgs/close.svg";
import { Link, useNavigate } from "react-router-dom";
import { TagInput } from '../input/tagInput';

interface SearchTagProps {
  idol: string;
  to: string;
}

export const SearchTag = ({ idol, to }: SearchTagProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const removeTags = (indexToRemove: number) => {
    const filter = tags.filter((el, index) => index !== indexToRemove);
    setTags(filter);
  };

  const addTags = (value: string) => {
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
    }
  };

  const handleEnter = () => {
    if (tags.length > 0) {
      navigate(to);
    }
  };

  return (
    <>
      <TagsInputContainer>
        <TagsInputFocused>
          <TagList>
            {tags.map((tag, index) => (
              <TagItem key={index}>
                <span className="tag-title">{tag}</span>
                <CloseIcon
                  src={Close}
                  onClick={() => removeTags(index)}
                ></CloseIcon>
              </TagItem>
            ))}
          </TagList>
          {idol && <Content>{idol}</Content>}
          <TagInput
            onEnter={addTags}
            onEnterPress={handleEnter}
            placeholder={tags.length === 0 ? "검색하세요" : ""}
            tags={tags}
          />
        </TagsInputFocused>
      </TagsInputContainer>
    </>
  );
};

const Content = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray__1};
  margin-bottom: 3px;
`;

const TagsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 409px;
  align-items: center;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 19px;
`;

const TagItem = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: ${({ theme }) => theme.color.one};
  border-radius: 15px;
`;

const CloseIcon = styled.img`
  text-align: center;
  width: 9px;
  cursor: pointer;
  margin-left: 10px;
`;

const TagsInputFocused = styled.div``;
